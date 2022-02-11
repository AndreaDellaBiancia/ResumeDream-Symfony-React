import { SET_NEW_STATE_SOCIAL } from '../actions/api';

const initialState = {
  social_network: [{
    id: 1,
    name: 'Facebook',
    link: 'https://www.facebook.com/jamesbond.jamesbond.98434997',
    createdAt: '2021-12-02',
    updatedAt: '2021-12-02',
  },
  {
    id: 2,
    name: 'Twitter',
    link: 'https://twitter.com/No_TimeToDie007',
    createdAt: '2021-12-02',
    updatedAt: '2021-12-02',
  },
  {
    id: 3,
    name: 'Instagram',
    link: 'https://www.instagram.com/007/',
    createdAt: '2021-12-02',
    updatedAt: '2021-12-02',
  },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_STATE_SOCIAL: {
      return {
        ...state,
        social_network: action.newStateValue,
      };
    }
    default:
      return state;
  }
};

export default reducer;
