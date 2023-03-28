import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="main-nav">
          <ul>
            <li>
              <NavLink to="/mountains">mountains</NavLink>
            </li>
            <li>
              <NavLink to="/beaches">Beaches</NavLink>
            </li>
            <li>
              <NavLink to="/bird">bird</NavLink>
            </li>
            <li>
              <NavLink to="/foods">foods</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
