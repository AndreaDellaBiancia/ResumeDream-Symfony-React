export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export const setInputValue = (stateProperty, value) => ({
  type: SET_INPUT_VALUE,
  stateProperty,
  value,
});

export const SEND_REGISTER_DATAS_TO_API = 'SEND_REGISTER_DATAS_TO_API';

export const sendRegisterDatasToApi = () => ({
  type: SEND_REGISTER_DATAS_TO_API,
});

export const SET_PASSWORD_VALUE = 'SET_PASSWORD_VALUE';

export const setPasswordValue = (property, value) => ({
  type: SET_PASSWORD_VALUE,
  property,
  value,
});
