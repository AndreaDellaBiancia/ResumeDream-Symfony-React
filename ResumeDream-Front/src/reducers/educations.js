import { SET_NEW_STATE_EDUCATION } from '../actions/api';

const initialState = {

  education: [{
    id: 1,
    certificate: "Tireur d'élite",
    school_name: 'CIA',
    city: 'London',
    start_date: '2000-09-03',
    end_date: '2003-06-28',
    content: "Enseignement pour devenir un tireur d'élite reconnu",
    createdAt: '2021-12-02',
    updatedAt: '2021-12-02',
  },
  {
    id: 2,
    certificate: "Stratégie d'inflitration",
    school_name: 'Academic School of Strategic infiltration',
    city: 'London',
    start_date: '2008-09-09',
    end_date: '2010-07-07',
    content: "Enseignement pour devenir un tireur d'élite reconnu",
    createdAt: '2021-12-02',
    updatedAt: '2021-12-02',
  },
  {
    id: 3,
    certificate: 'CAP patisserie',
    school_name: 'Ecole de patisserie de Paris',
    city: 'Paris',
    start_date: '1997-09-09',
    end_date: '1999-04-04',
    content: 'Apprentissage des bases standard de la patisserie',
    createdAt: '2021-12-02',
    updatedAt: '2021-12-02',
  },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_STATE_EDUCATION: {
      return {
        ...state,
        education: action.newStateValue,
      };
    }
    default:
      return state;
  }
};

export default reducer;
