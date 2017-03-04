import axios from 'axios';
import configs from '../configs';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwt_decode from 'jwt-decode';
import { SET_CURRENT_USER } from '../constants/ActionTypes';

export function setCurrentUser(user){
  return {
    type: SET_CURRENT_USER,
    user
  }
}

export function logout(){
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}


export function login(userData){
  return dispatch => {
    return axios({
      method: 'post',
      url: `${configs.API_SERVER_URL}auth`,
      data: userData
    }).then(res => {
      const token = res.data.token;
      localStorage.setItem('jwtToken', token);
      setAuthorizationToken(token);
      const decoded_jwt = jwt_decode(token);
      //console.log("The decoded token: ", decoded_jwt);
      dispatch(setCurrentUser(decoded_jwt));
    });
  }
}
