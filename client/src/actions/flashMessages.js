import { ADD_FLASH_MESSAGE } from '../constants/ActionTypes';
export function addFlashMessage(msg){
  return {
    type: ADD_FLASH_MESSAGE,
    msg: msg
  }
}
