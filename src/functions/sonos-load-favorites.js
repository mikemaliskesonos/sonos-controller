import axios from 'axios';

exports.handler = async (event) => {
  const { 
    accessToken, 
    groupId,
    params
  } = JSON.parse(event.body);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  console.log('CALLING SONOS FAVORITES');

  try {
    const res = await axios.post(`https://api.ws.sonos.com/control/api/v1/groups/${groupId}/favorites`, params, { headers });
    const { data } = res;
    console.log(data);
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err.message,
    };
  }
};
