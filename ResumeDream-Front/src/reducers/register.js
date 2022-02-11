import { SET_INPUT_VALUE, SET_PASSWORD_VALUE } from '../actions/register';

const initialState = {
  nickname: '',
  email: '',
  password: {
    first: '',
    second: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INPUT_VALUE: {
      return {
        ...state,
        [action.stateProperty]: action.value,
      };
    }
    case SET_PASSWORD_VALUE: {
      return {
        ...state,
        password: {
          ...state.password,
          [action.property]: action.value,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
