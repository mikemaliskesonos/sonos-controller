const { config, authInstance } = require('./helper/oauth');

exports.handler = (event, context, callback) => {
    const { code } = event.queryStringParameters;

    authInstance.authorizationCode
        .getToken({
            code,
            redirect_uri: config.redirect_uri,
            client_id: config.clientId,
            client_secret: config.clientSecret,
        })
        .then(tokenObject => {
            const accessToken = authInstance.accessToken.create(tokenObject);
            return accessToken;
        })
        .then(accessToken => {
            const result64 = Buffer.from(JSON.stringify(accessToken)).toString(
                'base64',
            );
            console.log(result64);

            return callback(null, {
                statusCode: 302,
                headers: {
                    Location: `/page-2?data=${result64}`,
                    'Cache-Control': 'no-cache',
                },
                body: '',
            });
        })
        .catch(error =>
            callback(null, {
                statusCode: error.statusCode || 500,
                body: JSON.stringify({
                    error: error.message,
                }),
            }),
        );
};
