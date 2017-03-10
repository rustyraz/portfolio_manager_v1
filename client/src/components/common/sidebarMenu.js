//this will be included in many pages apart from login and register
import React from 'react';
import { NavLink } from 'react-router-dom';

export default (
  <div className="col-sm-12 col-md-2">
    <div className="list-group sidenav">
      <NavLink className="list-group-item" activeClassName="active"  to="/profile"><span className="glyphicon glyphicon-user" aria-hidden="true"></span><br/>Profile</NavLink>
      <NavLink className="list-group-item" activeClassName="active"  to="/contacts"><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span><br/>Contacts</NavLink>
      <NavLink className="list-group-item" activeClassName="active"  to="/experience"><span className="glyphicon glyphicon-briefcase" aria-hidden="true"></span><br/>Experience</NavLink>
      <NavLink className="list-group-item" activeClassName="active"  to="/education"><span className="glyphicon glyphicon-education" aria-hidden="true"></span><br/>Education</NavLink>
      <NavLink className="list-group-item" activeClassName="active"  to="/referees"><span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span><br/>Referees</NavLink>
      <NavLink className="list-group-item" activeClassName="active"  to="/templates"><span className="glyphicon glyphicon-duplicate" aria-hidden="true"></span><br/>Templates</NavLink>
      <NavLink className="list-group-item" activeClassName="active"  to="/referees"><span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span><br/>PUBLISH</NavLink>
    </div>
  </div>
);
