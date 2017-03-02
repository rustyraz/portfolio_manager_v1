import React from  'react';
import { Route } from 'react-router-dom';
import ProfilePage from './pages/profile_page';
import ExperiencePage from './pages/experience_page';
import EducationPage from './pages/education_page';
import ContactsPage from './pages/contacts_page';
import RefereesPage from './pages/referees_page';
import HomePage from './pages/home_page';
import LoginPage from '../containers/LoginPageContainer';
import RegisterPage from '../containers/RegisterPageContainer';
import TemplatesPage from './pages/templates_page';

 export default (
   <div className="col-sm-12 col-md-10">
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
 );
