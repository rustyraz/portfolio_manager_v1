import { ADD_FLASH_MESSAGE } from '../actions/flashMessages';
export default (state = [], action = {}) =>{
  switch (action.type) {
    case ADD_FLASH_MESSAGE:
      return [
        ...state,
        {
          type: action.message.type,
          text: action.message.text
        }
      ]
      break;
    default: return state;
  }
}
