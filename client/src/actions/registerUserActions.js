import axios from 'axios';
import configs from '../configs';
//import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from '../constants/ActionTypes';

export function userRegisterRequest(userData){
  return dispatch => {
    return axios({
      method: 'post',
      url: `${configs.API_SERVER_URL}user/register`,
      data: userData
    });
  }
}
