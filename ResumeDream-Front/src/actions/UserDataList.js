export const SET_DATA_LIST_STATE = 'SET_DATA_LIST_STATE';

export const setdataListState = (state, stateProperty, endPoint, title) => ({
  type: SET_DATA_LIST_STATE,
  state,
  stateProperty,
  endPoint,
  title,
});
