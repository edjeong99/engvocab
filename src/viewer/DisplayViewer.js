import React, { Component } from 'react';
import DisplayCardView from '../components/DisplayCardView';
import DisplayQuizs from '../components/DisplayQuizs';
import { Route, withRouter, NavLink } from 'react-router-dom';

class DisplayViewer extends Component {
  render() {
    return (
      <div>
        <Route
          exact
          path='/'
          render={(props) => <DisplayCardView {...props} />}
        />

        <Route path='/quiz' render={(props) => <DisplayQuizs {...props} />} />
      </div>
    );
  }
}

export default DisplayViewer;
