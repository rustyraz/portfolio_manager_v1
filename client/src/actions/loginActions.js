import axios from 'axios';
import configs from '../configs';

export function login(userData){
  return dispatch => {
    return axios({
      method: 'post',
      url: `${configs.API_SERVER_URL}user/login`,
      data: userData
    });
  }
}
