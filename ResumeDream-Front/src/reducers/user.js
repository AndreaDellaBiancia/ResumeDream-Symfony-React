import { SET_INPUT_VALUE_LOGIN } from '../actions/login';
import { SEND_LOGOUT_TO_API } from '../actions/logout';

const initialState = {
  username: '',
  password: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE_LOGIN: {
      return {
        ...state,
        [action.stateProperty]: action.value,
      };
    }
    case SEND_LOGOUT_TO_API: {
      return {
        ...state,
        username: '',
        password: '',
      };
    }
    default:
      return state;
  }
};

export default reducer;
