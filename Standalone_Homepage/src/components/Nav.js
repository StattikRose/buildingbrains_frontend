import React, { Component } from 'react';
import { Link } from 'react-router'
import NavItem from './NavItem.js'
class Nav extends Component {
    

    render() {
      return (
        <div className="col-sm-3 col-md-2 sidebar">
                  <ul className="nav nav-sidebar">
                    <li>
                    <Link to="/" >  
                    <i className="fa fa-home fa-5x " aria-hidden="true"></i>
                    <p>Home</p>
                    </Link>
                    </li>
                </ul>

                <ul className="nav nav-sidebar">
                    <NavItem to="/Devices"  >  
                    <i className="fa fa-object-group fa-5x " aria-hidden="true"></i>
                    <p>Devices</p>
                    </NavItem>
                </ul>

                <ul className="nav nav-sidebar">
                    <NavItem to="/Stats"> 
                    <i className="fa fa-random fa-5x " aria-hidden="true"></i>
                    <p>Automation</p>
                    </NavItem>
                </ul>

                <ul className="nav nav-sidebar">
                    <NavItem to="/Users"> 
                    <i className="fa fa-users fa-5x " aria-hidden="true"></i>
                    <p>User</p>
                    </NavItem>
                </ul>

        </div>
        );
      }
}

export default Nav;
