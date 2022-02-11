import { SET_NEW_STATE_SKILL } from '../actions/api';

const initialState = {
  skill:
  [
    {
      id: 1,
      title: 'Rapidité',
      content: "J'arrive à tuer plus de 3 hommes à la seconde.",
      createdAt: '2021-12-02',
      updatedAt: '2021-12-02',
    },
    {
      id: 2,
      title: 'Discretion',
      content: 'Je me faufile partout où vous aurez besoin.',
      createdAt: '2021-12-02',
      updatedAt: '2021-12-02',
    },
    {
      id: 3,
      title: 'Gourmet',
      content: "J'ai un palais raffiné.",
      createdAt: '2021-12-02',
      updatedAt: '2021-12-02',
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_STATE_SKILL: {
      return {
        ...state,
        skill: action.newStateValue,
      };
    }
    default:
      return state;
  }
};

export default reducer;
