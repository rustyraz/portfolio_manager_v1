import axios from 'axios';
import configs from '../configs';
export function userRegisterRequest(userData){
  return dispatch => {
    axios({
      method: 'post',
      url: `${configs.API_SERVER_URL}user/register`,
      data: userData
    });
  }
}
