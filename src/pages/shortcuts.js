import React, { Component } from 'react';

import { getHouseHolds } from '../utils/auth';
import FavoritesList from '../components/favoritesList';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class ShortcutsAPI extends Component {
  state = {
    loading: false,
    error: null,
    households: [],
  }

  componentDidMount() {
    getHouseHolds(this);
  }

  render() {
    return (
        <div>
            {this.state.loading ? <div>Loading Household</div> : <div></div>}
            {this.state.error ? <div>{this.state.error}</div> : <div></div>}
            {this.state.households.map((hh, i) => <FavoritesList key={i} householdId={hh.id}/>)}
        </div>
          
    );
  }
}

export default ShortcutsAPI;
