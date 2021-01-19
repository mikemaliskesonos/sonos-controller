import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Grommet, Heading } from 'grommet';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { isLoggedIn } from '../utils/auth';
import { Button, Jumbotron, Table } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

class IndexPage extends Component {
  state = {
    loggedIn: false,
  }

  async componentDidMount() {
    try {
      const loggedIn = await isLoggedIn();
      console.log('RES', loggedIn);
      this.setState({ loggedIn });
    } catch (error) {
      console.log('LOGGED IN ERROR', error);
    }
  }

  render() {
    console.log('state', this.state);
    return (
      <Layout>
        <Grommet theme={theme}>
          <div style={{marginTop: 50, textDecorationLine: 'none'}}>
            <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
            {this.state.loggedIn ? 
              <div>
                  <h1>Welcome!</h1>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>HHID</td>
                        <td>IDK</td>
                      </tr>
                    </tbody>
                  </Table>
              </div>
              :
              <div>
                <Jumbotron style={{ margin: '10px' }}>
                  <h1>Welcome!</h1>
                  <p>
                    To control your system, please login with your Sonos account
                  </p>
                  <p>
                    <Button variant="primary" href="/.netlify/functions/auth">Login</Button>
                  </p>
                </Jumbotron>
              </div>
            }
          </div>
        </Grommet>
      </Layout>
    );
  }
}

export default IndexPage;
