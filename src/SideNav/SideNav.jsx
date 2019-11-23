import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import './simple-sidebar.css';

const DashBoardDir = '/DashBoard';

const routes = {
  Test: {
    DashBoard: `${DashBoardDir}`,
  },
  Admin:{
    'Admin Dash': `${DashBoardDir}`,
  }
};

class SideNav extends Component {
  constructor(props) {
    super(props);
    const { role } = this.props;
    this.state = {
      pathes: routes[role],
    };
  }

  componentDidMount() {
    const { role } = this.props;
    this.setState({
      pathes: routes[role],
    });
  }

  Logout() {
    localStorage.clear();
  }

  render() {
    const { role } = this.props;
    const { pathes } = this.state;
    return (
        <div>
          <div className="sidenav" id="sideNav">
            {/* Loop through SideNav routes and create links with key as link title */}
            {Object.keys(routes[role]).map(route => (
              <NavLink key={route} to={pathes[route]}>{route}</NavLink>
            ))}
            {/* <a href="/index.html" id="logout" onClick={this.Logout}>Logout</a> */}
          </div>
        </div>
    );
  }
}
export default SideNav;