import { SET_DATA_LIST_STATE } from '../actions/UserDataList';

const initialState = {
  title: '',
  currentState: '',
  endPoint: '',
  statePropertyName: '',
  object: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_DATA_LIST_STATE: {
      return {
        ...state,
        title: action.title,
        currentState: action.state,
        endPoint: action.endPoint,
        statePropertyName: action.stateProperty,
      };
    }
    default:
      return state;
  }
};

export default reducer;
