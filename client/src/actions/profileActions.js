import axios from 'axios';

export function createProfile(profileData){
  return dispatch => {
    return axios({
      method: 'post',
      url: `/profile`,
      data: profileData
    });
  }
}
