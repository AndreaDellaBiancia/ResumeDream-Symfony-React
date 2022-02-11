export const GET_DATA_FROM_API = 'GET_DATA_FROM_API';

export const getDataFromApi = (stateName, endPoint) => ({
  type: GET_DATA_FROM_API,
  stateName,
  endPoint,
});

export const POST_DATA_TO_API = 'POST_DATA_TO_API';

export const postDataToApi = (endPoint, data) => ({
  type: POST_DATA_TO_API,
  endPoint,
  data,
});

export const SET_NEW_STATE_EXPERIENCE = 'SET_NEW_STATE_EXPERIENCE';

export const setNewStateExperience = (newStateValue) => ({
  type: SET_NEW_STATE_EXPERIENCE,
  newStateValue,
});

export const SET_NEW_STATE_EDUCATION = 'SET_NEW_STATE_EDUCATION';

export const setNewStateEducation = (newStateValue) => ({
  type: SET_NEW_STATE_EDUCATION,
  newStateValue,
});

export const SET_NEW_STATE_PERSONAL_DATA = 'SET_NEW_STATE_PERSONAL_DATA';

export const setNewStatePersonnalData = (newStateValue) => ({
  type: SET_NEW_STATE_PERSONAL_DATA,
  newStateValue,
});

export const SET_NEW_STATE_LANGUAGE = 'SET_NEW_STATE_LANGUAGE';

export const setNewStateLanguage = (newStateValue) => ({
  type: SET_NEW_STATE_LANGUAGE,
  newStateValue,
});

export const SET_NEW_STATE_ACTIVITY = 'SET_NEW_STATE_ACTIVITY';

export const setNewStateActivity = (newStateValue) => ({
  type: SET_NEW_STATE_ACTIVITY,
  newStateValue,
});

export const SET_NEW_STATE_SKILL = 'SET_NEW_STATE_SKILL';

export const setNewStateSkill = (newStateValue) => ({
  type: SET_NEW_STATE_SKILL,
  newStateValue,
});

export const SET_NEW_STATE_SOCIAL = 'SET_NEW_STATE_SOCIAL';

export const setNewStateSocial = (newStateValue) => ({
  type: SET_NEW_STATE_SOCIAL,
  newStateValue,
});

export const ADD_TO_STATE = 'ADD_TO_STATE';

export const addToState = (stateName, value) => ({
  type: ADD_TO_STATE,
  stateName,
  value,
});

export const MODAL_SUBMIT = 'MODAL_SUBMIT';

export const modalSubmit = (modalValue, state, endPoint) => ({
  type: MODAL_SUBMIT,
  modalValue,
  state,
  endPoint,
});

export const PATCH_TO_STATE = 'PATCH_TO_STATE';

export const patchToState = (stateName, value) => ({
  type: PATCH_TO_STATE,
  stateName,
  value,
});

export const DELETE_TO_STATE = 'DELETE_TO_STATE';

export const deleteToState = (statePropertyName, currentStateTest) => ({
  type: DELETE_TO_STATE,
  ...currentStateTest,
  statePropertyName,
});
