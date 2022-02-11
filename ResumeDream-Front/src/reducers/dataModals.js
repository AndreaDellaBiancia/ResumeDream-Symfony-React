import {
  SET_CURRENT_STATE,
  SET_IS_MODAL_ACTIVE,
  SET_MODAL_CONTENT_VALUE,
  SET_MODAL_END_DATE_VALUE,
  SET_MODAL_END_POINT,
  SET_MODAL_INPUT_VALUE,
  SET_MODAL_START_DATE_VALUE,
  SET_MODAL_TITLE,
} from '../actions';

const initialState = {
  isDisplayed: false,
  currentState: '',
  title: '',
  inputs: {
    personalData: [
      {
        type: 'text',
        name: 'Prénom',
        id: 'first_name',
        value: '',
      },
      {
        type: 'text',
        name: 'Nom',
        id: 'last_name',
        value: '',
      },
      {
        type: 'text',
        name: 'Ville',
        id: 'city',
        value: '',
      },
      {
        type: 'text',
        name: 'Adresse',
        id: 'address',
        value: '',
      },
      {
        type: 'date',
        name: 'Date de naissance',
        id: 'birth_date',
        value: '',
      },
      {
        type: 'email',
        name: 'Mail',
        id: 'email',
        value: '',
      },
      {
        type: 'tel',
        name: 'N° de téléphone',
        id: 'phone_nb',
        value: '',
      },
      {
        type: 'file',
        name: 'Photo de profil',
        id: 'picture',
        value: '',
      },
      {
        type: 'text',
        name: 'Linkedin',
        id: 'linkedin',
        value: '',
      },
    ],
    experiences: [
      {
        type: 'text',
        name: 'Poste',
        id: 'role',
        value: '',
      },
      {
        type: 'text',
        name: 'Entreprise',
        id: 'company_name',
        value: '',
      },
      {
        type: 'text',
        name: 'Ville',
        id: 'city',
        value: '',
      },
    ],
    educations: [
      {
        type: 'text',
        name: 'Diplôme',
        id: 'certificate',
        value: '',
      },
      {
        type: 'text',
        name: 'École',
        id: 'school_name',
        value: '',
      },
    ],
    language: [
      {
        type: 'text',
        name: 'Langue',
        id: 'name',
        value: '',
      },
      {
        type: 'text',
        name: 'Niveau',
        id: 'level',
        value: '',
      },
    ],
    activity: [
      {
        type: 'text',
        name: 'Nom',
        id: 'title',
        value: '',
      },
    ],
    skill: [
      {
        type: 'text',
        name: 'Nom',
        id: 'title',
        value: '',
      },
    ],
    socialNetwork: [
      {
        type: 'text',
        name: 'Nom',
        id: 'name',
        value: '',
      },
      {
        type: 'text',
        name: 'Lien',
        id: 'link',
        value: '',
      },
    ],
  },
  newData: [],
  endPoint: '',
  content: '',
  start_date: '',
  end_date: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_IS_MODAL_ACTIVE: {
      return {
        ...state,
        isDisplayed: action.newBool,
      };
    }
    case SET_CURRENT_STATE: {
      return {
        ...state,
        currentState: action.currentState,
      };
    }
    case SET_MODAL_TITLE: {
      return {
        ...state,
        title: action.modalTitle,
      };
    }
    case SET_MODAL_END_POINT: {
      return {
        ...state,
        endPoint: action.endPoint,
      };
    }
    case SET_MODAL_START_DATE_VALUE: {
      return {
        ...state,
        start_date: action.startDateValue,
      };
    }
    case SET_MODAL_END_DATE_VALUE: {
      return {
        ...state,
        end_date: action.endDateValue,
      };
    }
    case SET_MODAL_CONTENT_VALUE: {
      return {
        ...state,
        content: action.contentValue,
      };
    }
    case SET_MODAL_INPUT_VALUE: {
      const { currentState } = state;
      const newCurrentStateData = [];
      state.inputs[currentState].forEach(
        (input, index) => {
          if (index === action.index) {
            newCurrentStateData.push({
              ...input,
              value: action.value,
            });
          }
          else {
            newCurrentStateData.push(input);
          }
        },
      );
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [currentState]: newCurrentStateData,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
