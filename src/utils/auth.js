import axios from 'axios';

export const isBrowser = typeof window !== 'undefined';

export const getUser = () => (window.localStorage.sonosUser
  ? JSON.parse(window.localStorage.sonosUser)
  : {});

export const setUser = (user) => {
  if (isBrowser) {
    console.log('SET USER', user);
    window.localStorage.sonosUser = JSON.stringify(user);
  }
};

const refreshToken = async (tokenObject) => {
  axios
    .post('/.netlify/functions/auth-refresh', { tokenObject })
    .then((res) => {
      console.log('REFERESH THE TOKEN', res);
      setUser(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const isLoggedIn = async () => {
  // add a check to see if the token is still valid, if not, refresh it
  const user = getUser();
  if (!user.token) {
    console.log('no user token');
    return false;
  }

  if (new Date(user.token.expires_at) < new Date()) {
    console.log('EXPIRED!!');
    const token = await refreshToken(user.token);
    setUser(token.data);
    return !!token.token;
  }

  return !!user.token;
};

export const getHouseHolds = (component) => {
  const sonosUser = getUser();
  component.setState({ loading: true });
  axios
    .post('/.netlify/functions/sonos-households', { accessToken: sonosUser.token.access_token })
    .then((res) => {
      component.setState({
        loading: false,
        households: res.data.households,
      });
      return res.data.households;
    })
    .catch((err) => {
      console.log(err);
      component.setState({
        error: err.message,
        loading: false,
      });
      return null;
    });
    
}
