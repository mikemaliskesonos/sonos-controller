import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { getUser } from '../utils/auth';
import { Favorite } from 'grommet-icons';

class FavoritesList extends Component {
  state = {
    loading: false,
    error: null,
    favorites: [],
  }

  componentDidMount() {
    this.getFavorites();
  }

  getFavorites = () => {
    const { householdId } = this.props;
    const sonosUser = getUser();
    this.setState({ loading: true });
    axios
      .post('/.netlify/functions/sonos-favorites', { accessToken: sonosUser.token.access_token, householdId })
      .then((res) => {
        console.log(res);
        this.setState({
          loading: false,
          favorites: res.data.items,
        });
      })
      .catch((err) => {
        console.log('ERROR HERE????');
        this.setState({
          error: err,
          loading: false,
        });
        console.log(err);
      });
  }

  render() {
    const { householdId } = this.props;
    return (
      <div>
        <div>{householdId}</div>
        <ul>
          {this.state.error ? <li>{this.state.error}</li> : <div></div>}
          {
            this.state.favorites.map((fav, i) => <li>{fav.name}</li>)
          }
        </ul>
      </div>
    );
  }
}

FavoritesList.propTypes = {
  householdId: PropTypes.string,
};

export default FavoritesList;
