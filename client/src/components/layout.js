import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import ProfilePage from './pages/profile_page';
import ExperiencePage from './pages/experience_page';
import EducationPage from './pages/education_page';
import ContactsPage from './pages/contacts_page';
import RefereesPage from './pages/referees_page';
import HomePage from './pages/home_page';
import LoginPage from './pages/account_pages/login';
import RegisterPage from './pages/account_pages/register_page';

import TemplatesPage from './pages/templates_page';

import Navbar from './navbar';
import '../index.css';

export default class Layout extends Component {
  render(){
    return (
      <div className="container">
        <Navbar/>
        <div className="row">
          <div className="col-sm-12 col-md-2">
            <div className="list-group sidenav">
              <NavLink className="list-group-item" exact  activeClassName="active"  to="/"><span className="glyphicon glyphicon-home" aria-hidden="true"></span><br/>Home</NavLink>
              <NavLink className="list-group-item" activeClassName="active"  to="/profile"><span className="glyphicon glyphicon-user" aria-hidden="true"></span><br/>Profile</NavLink>
              <NavLink className="list-group-item" activeClassName="active"  to="/contacts"><span className="glyphicon glyphicon-earphone" aria-hidden="true"></span><br/>Contacts</NavLink>
              <NavLink className="list-group-item" activeClassName="active"  to="/experience"><span className="glyphicon glyphicon-briefcase" aria-hidden="true"></span><br/>Experience</NavLink>
              <NavLink className="list-group-item" activeClassName="active"  to="/education"><span className="glyphicon glyphicon-education" aria-hidden="true"></span><br/>Education</NavLink>
              <NavLink className="list-group-item" activeClassName="active"  to="/referees"><span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span><br/>Referees</NavLink>
              <NavLink className="list-group-item" activeClassName="active"  to="/templates"><span className="glyphicon glyphicon-duplicate" aria-hidden="true"></span><br/>Templates</NavLink>
            </div>
          </div>
          <div className="col-sm-12 col-md-8">
            <Route exact path="/" component={HomePage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/contacts" component={ContactsPage} />
            <Route path="/experience" component={ExperiencePage} />
            <Route path="/education" component={EducationPage} />
            <Route path="/referees" component={RefereesPage} />
            <Route path="/templates" component={TemplatesPage} />
            <Route path='/register' component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
          </div>
        </div>
      </div>
    );
  }

}
