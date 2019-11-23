import React, { Component } from 'react';
import { Switch,Route } from 'react-router-dom';


import Dashboard from '../Dashboard/Dashboard';

class TestRouter extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    return ( 
    <Switch>
      <Route exact path='/Dashboard' component={Dashboard} />
    </Switch> );
  }
}
 
export default TestRouter;