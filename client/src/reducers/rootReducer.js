import { combineReducers } from 'redux';

//include the reducers here
import profile from './profile';
import flashMessages from './flashMessages';
import auth from './auth';

export default combineReducers({
  profile,
  flashMessages,
  auth
});
