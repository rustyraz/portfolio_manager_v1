import axios from 'axios';

//we can use this fnction in two places.....when the user logs in and when they reload the page

export default function setAuthorizationToken(token){
  if(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }else{
    delete axios.defaults.headers.common['Authorization'];
  }
}
