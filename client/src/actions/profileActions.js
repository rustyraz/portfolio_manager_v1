import axios from 'axios';
import configs from '../configs';

export function createProfile(profileData){
  return dispatch => {
    return axios({
      method: 'post',
      url: `${configs.API_SERVER_URL}profile`,
      data: profileData
    });
  }
}
