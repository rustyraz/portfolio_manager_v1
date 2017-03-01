import { combineReducers } from 'redux';

//include the reducers here
import profile from './profile';
import flashMessages from './flashMessages';

export default combineReducers({
  profile,
  flashMessages
});
