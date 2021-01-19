import React, { Component } from 'react';
import { Link } from 'gatsby';
import axios from 'axios';
import { Grommet } from 'grommet';

import { getUser, getHouseHolds } from '../utils/auth';
import Layout from '../components/layout';
import HouseHold from '../components/household';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class SonosAPI extends Component {
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
        <Grommet theme={theme}>
          <Link to="/">Go home</Link><br/>
          {this.state.loading ? <div>Loading Household</div> : <div></div>}
          {this.state.error ? <div>{this.state.error}</div> : <div></div>}
          {this.state.households.map((hh, i) => <HouseHold key={i} householdId={hh.id}/>)}
        </Grommet>
      </Layout>
    );
  }
}

export default SonosAPI;
