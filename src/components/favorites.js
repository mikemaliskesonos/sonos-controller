import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button, CardColumns, Card, Table } from 'react-bootstrap';

import { getUser } from '../utils/auth';
import './favorites.css';

import {
  Pause,
  Play,
} from 'grommet-icons';

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
      .post('/.netlify/functions/sonos-get-favorites', { accessToken: sonosUser.token.access_token, householdId })
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
        <CardColumns>
          {this.state.error ? <li>{this.state.error}</li> : <div></div>}
          {
            this.state.favorites.map((fav, i) => <SonosFavorite favorite={fav} key={i}></SonosFavorite>)
          }
        </CardColumns>
      </div>
    );
  }
}

FavoritesList.propTypes = {
  householdId: PropTypes.string,
};

class SonosFavorite extends Component {
  componentDidMount() {
    
  }

  playFavorite(favId) {
    const sonosUser = getUser();
    var body = {
      "action": "REPLACE",
      "favoriteId": favId,
      "playOnCompletion": true,
    }

    axios
      .post('/.netlify/functions/sonos-load-favorites', { 
        accessToken: sonosUser.token.access_token, 
        groupId: "RINCON_7828CA06C4F801400:3045598323", 
        params: body
      })
      .then((res) => {
        console.log(res);
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
    const fav = this.props.favorite;
    return (
      <img src={fav.imageUrl} clickable="true" onClick={() => { this.playFavorite(fav.id); }}></img>
      // <Card style={{ width: '18rem' }}>
      //   <Card.Img variant="top" src={fav.imageUrl} />
      //   <Card.ImgOverlay>
      //     {/* <Button variant="primary" className="center">Play</Button> */}
      //     <Play size='large' className="center" onClick={() => { this.playFavorite(fav.id); }} />
      //   </Card.ImgOverlay>
      //   {/* <Card.Body>
      //     <Card.Title>{fav.name}</Card.Title>
      //   </Card.Body> */}
      // </Card>
    );
  }
}

SonosFavorite.propTypes = {
  favorite: PropTypes.object,
};

export default FavoritesList;
