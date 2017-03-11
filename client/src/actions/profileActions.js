import axios from 'axios';
import { SET_CURRENT_USER } from '../constants/ActionTypes';

export function createProfile(profileData){
  return dispatch => {
    return axios({
      method: 'post',
      url: '/profile',
      data: profileData
    });
  }
}

export function getUserProfile(){
  return dispatch => {
    return axios({
      method: 'get',
      url: '/profile'
    });
  }
}
