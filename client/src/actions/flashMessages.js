import { ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from '../constants/ActionTypes';
export function addFlashMessage(msg){
  return {
    type: ADD_FLASH_MESSAGE,
    message: msg
  }
}

export function deleteFlashMessage(id){
  return {
    type:DELETE_FLASH_MESSAGE,
    id
  }
}
