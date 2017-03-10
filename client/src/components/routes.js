import React from  'react';
import { Route } from 'react-router-dom';
import ProfilePage from './pages/profile/profile_page';
import ExperiencePage from './pages/experience_page';
import EducationPage from './pages/education_page';
import ContactsPage from './pages/contacts_page';
import RefereesPage from './pages/referees_page';
import HomePage from './pages/home_page';
import LoginPage from '../containers/LoginPageContainer';
import RegisterPage from '../containers/RegisterPageContainer';
import TemplatesPage from './pages/templates_page';

import requireAuth from '../utils/requireAuth';

 export default (
   <div>
     <Route exact path="/" component={HomePage} />
     <Route path="/profile" component={requireAuth(ProfilePage)} />
     <Route path="/contacts" component={requireAuth(ContactsPage)} />
     <Route path="/experience" component={requireAuth(ExperiencePage)} />
     <Route path="/education" component={requireAuth(EducationPage)} />
     <Route path="/referees" component={requireAuth(RefereesPage)} />
     <Route path="/templates" component={requireAuth(TemplatesPage)} />
     <Route path='/register' component={RegisterPage} />
     <Route path="/login" component={LoginPage} />
   </div>
 );
