import React from 'react';
import PropTypes from 'prop-types';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './App.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Missions from '../Missions';
import Rockets from '../Rockets';
import Launches from '../Launches';
import MissionDetails from '../Missions/MissionDetails';

function App({ history, store }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <div id="spacex-app">
          <Header />

          <Switch>
            <Redirect exact from="/" to="/missions" />
            <Route
              exact
              path='/missions'
              history={history}
              component={Missions} />
            <Route
              exact
              path='/rockets'
              history={history}
              component={Rockets} />
            <Route
              exact
              path='/launches'
              history={history}
              component={Launches} />
            <Route
              exact
              history={history}
              path='/missions/:id'
              render={(props) => 
                (<MissionDetails id={props.match.params.id.slice(1)}/>)
              } />
          </Switch>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

App.propTypes = {
  history: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default App;
