import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import setAuthorizationToken from './utils/setAuthorizationToken';
import rootReducer from './reducers/rootReducer';
import App from './App';

import jwt_decode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';
import { getUserProfile } from './actions/profileActions';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

//this code can be extracted to another file then imported
if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt_decode(localStorage.jwtToken)));
}

store.dispatch(getUserProfile());

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
