import { SET_NEW_STATE_PERSONAL_DATA } from '../actions/api';

const initialState = {
  personal_datas: {
    id: 1,
    first_name: '',
    last_name: '',
    birth_date: null,
    city: '',
    adress: '',
    email: '',
    phone_nb: '',
    picture: '',
    linkedin: '',
    content: '',
    createdAt: '',
    updatedAt: '',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_STATE_PERSONAL_DATA: {
      return {
        ...state,
        personal_datas: action.newStateValue,
      };
    }
    default:
      return state;
  }
};

export default reducer;
