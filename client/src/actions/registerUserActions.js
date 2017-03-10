import axios from 'axios';
//import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from '../constants/ActionTypes';

export function userRegisterRequest(userData){
  return dispatch => {
    return axios({
      method: 'post',
      url: `/user/register`,
      data: userData
    });
  }
}

export function isUserExists(identifier){
  return dispatch => {
    return axios.get(`/user/${identifier}`);
  }
}
