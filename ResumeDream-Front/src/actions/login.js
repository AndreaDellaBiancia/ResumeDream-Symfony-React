export const POST_LOG_DATAS_FROM_API = 'POST_LOG_DATAS_FROM_API';

export const postLogDatasFromApi = (username, password) => ({
  type: POST_LOG_DATAS_FROM_API,
  username,
  password,
});

export const SET_INPUT_VALUE_LOGIN = 'SET_INPUT_VALUE_LOGIN';

export const setInputValueLogin = (stateProperty, value) => ({
  type: SET_INPUT_VALUE_LOGIN,
  stateProperty,
  value,
});
