import { SET_NEW_STATE_ACTIVITY } from '../actions/api';

const initialState = {

  activity: [{
    id: 1,
    title: "Tir à l'arc",
    start_date: '2000-05-01',
    end_date: '2018-03-29',
    content: "Pendant mon temps libre j'aimais tiré à l'arc pour me détendre.",
    createdAt: '2021-12-02',
    updatedAt: '2021-12-02',
  },
  {
    id: 2,
    title: 'Bateau',
    start_date: '2018-03-29',
    end_date: '2021-12-20',
    content: "Passioné de bateau, j'aime faire quelques petits voyages.",
    createdAt: '2021-12-02',
    updatedAt: '2021-12-02',
  },
  {
    id: 3,
    title: 'Karaté',
    start_date: '1990-04-11',
    end_date: '2000-04-09',
    content: 'Niveau ceinture Noire.',
    createdAt: '2021-12-02',
    updatedAt: '2021-12-02',
  },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_STATE_ACTIVITY: {
      return {
        ...state,
        activity: action.newStateValue,
      };
    }
    default:
      return state;
  }
};

export default reducer;
