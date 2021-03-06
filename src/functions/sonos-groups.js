import axios from 'axios';

exports.handler = async (event) => {
  const { accessToken, householdId } = JSON.parse(event.body);
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${accessToken}`,
  };

  console.log('CALLING SONOS GROUPS');

  try {
    const res = await axios.get(`https://api.ws.sonos.com/control/api/v1/households/${householdId}/groups`, { headers });
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
