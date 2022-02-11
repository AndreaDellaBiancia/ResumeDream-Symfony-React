import { SET_NEW_STATE_EXPERIENCE } from '../actions/api';

const initialState = {
  work_experience: [
    {
      id: 1,
      company_name: 'CIA',
      city: 'London',
      role: 'Agent Secret',
      start_date: '2011-12-18',
      end_date: '',
      content: 'Agent Secret, tueur professionel',
      createdAt: '2021-12-02',
      updatedAt: '2021-12-02',
    },
    {
      id: 2,
      company_name: 'Chez le Chef Etchebest',
      city: 'Paris',
      role: 'Commis de cuisine',
      start_date: '2002-06-12',
      end_date: '2004-04-11',
      content: 'appris a cuisiner avec le grand chef Etchebest',
      createdAt: '2021-12-02',
      updatedAt: '2021-12-02',
    }, {
      id: 3,
      company_name: 'CIA',
      city: 'London',
      role: 'Sniper',
      start_date: '2008-04-09',
      end_date: '2010-04-04',
      content: 'Tireur d\'élite à la CIA',
      createdAt: '2021-12-02',
      updatedAt: '2021-12-02',
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_STATE_EXPERIENCE: {
      return {
        ...state,
        work_experience: action.newStateValue,
      };
    }
    default:
      return state;
  }
};

export default reducer;
