import { SET_NEW_STATE_LANGUAGE } from '../actions/api';

const initialState = {
  language:
  [{
    id: 1,
    name: 'Anglais',
    level: 'Courant',
    createdAt: '2021-12-02',
    updatedAt: '2021-12-02',
  },
  {
    id: 2,
    name: 'Français',
    level: 'Courant',
    createdAt: '2021-12-02',
    updatedAt: '2021-12-02',
  },
  {
    id: 3,
    name: 'Russe',
    level: 'Base',
    createdAt: '2021-12-02',
    updatedAt: '2021-12-02',
  },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_STATE_LANGUAGE: {
      return {
        ...state,
        language: action.newStateValue,
      };
    }
    default:
      return state;
  }
};

export default reducer;
