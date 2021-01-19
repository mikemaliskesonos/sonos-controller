import React, { Component } from 'react';

import { getHouseHolds } from '../utils/auth';
import FavoritesList from '../components/favorites';
import Layout from '../components/layout';

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
        <Layout>
            {this.state.loading ? <div>Loading Household</div> : <div></div>}
            {this.state.error ? <div>{this.state.error}</div> : <div></div>}
            {this.state.households.map((hh, i) => <FavoritesList key={i} householdId={hh.id}/>)}
        </Layout>
          
    );
  }
}

export default ShortcutsAPI;
