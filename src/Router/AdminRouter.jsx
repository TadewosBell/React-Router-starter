import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';


import AdminDashboard from '../Dashboard/AdminDashboard';

class TestRouter extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return ( 
    <Switch>
      <Route exact path='/Dashboard' component={AdminDashboard} />
    </Switch> );
  }
}
 
export default TestRouter;