export const SET_IS_MODAL_ACTIVE = 'SET_IS_MODAL_ACTIVE';

export const setIsModalActive = (newBool) => ({
  type: SET_IS_MODAL_ACTIVE,
  newBool,
});

export const SET_CURRENT_STATE = 'SET_CURRENT_STATE';

export const setCurrentState = (currentState) => ({
  type: SET_CURRENT_STATE,
  currentState,
});

export const SET_MODAL_TITLE = 'SET_MODAL_TITLE';

export const setModalTitle = (modalTitle) => ({
  type: SET_MODAL_TITLE,
  modalTitle,
});

export const SET_MODAL_INPUT_VALUE = 'SET_MODAL_INPUT_VALUE';

export const setModalInputValue = (index, value) => ({
  type: SET_MODAL_INPUT_VALUE,
  index,
  value,
});

export const SET_MODAL_START_DATE_VALUE = 'SET_MODAL_START_DATE_VALUE';

export const setModalStartDateValue = (startDateValue) => ({
  type: SET_MODAL_START_DATE_VALUE,
  startDateValue,
});

export const SET_MODAL_END_DATE_VALUE = 'SET_MODAL_END_DATE_VALUE';

export const setModalEndDateValue = (endDateValue) => ({
  type: SET_MODAL_END_DATE_VALUE,
  endDateValue,
});

export const SET_MODAL_CONTENT_VALUE = 'SET_MODAL_CONTENT_VALUE';

export const setModalContentValue = (contentValue) => ({
  type: SET_MODAL_CONTENT_VALUE,
  contentValue,
});

export const SET_MODAL_END_POINT = 'SET_MODAL_END_POINT';

export const setModalEndPoint = (endPoint) => ({
  type: SET_MODAL_END_POINT,
  endPoint,
});

export const SET_CONTACT_FIRST_NAME = 'SET_CONTACT_FIRST_NAME';

export const setContactFirstName = (newValue) => ({
  type: SET_CONTACT_FIRST_NAME,
  newValue,
});

export const SET_CONTACT_LAST_NAME = 'SET_CONTACT_LAST_NAME';

export const setContactLastName = (newValue) => ({
  type: SET_CONTACT_LAST_NAME,
  newValue,
});

export const SET_CONTACT_EMAIL = 'SET_CONTACT_EMAIL';

export const setContactEmail = (newValue) => ({
  type: SET_CONTACT_EMAIL,
  newValue,
});

export const SET_CONTACT_SUBJECT = 'SET_CONTACT_SUBJECT';

export const setContactSubject = (newValue) => ({
  type: SET_CONTACT_SUBJECT,
  newValue,
});

export const SET_CONTACT_MESSAGE = 'SET_CONTACT_MESSAGE';

export const setContactMessage = (newValue) => ({
  type: SET_CONTACT_MESSAGE,
  newValue,
});

export const ADD_NEW_CONTACT = 'ADD_NEW_CONTACT';

export const addNewContact = (firstName, lastName, email, subject, message) => ({
  type: ADD_NEW_CONTACT,
  firstName,
  lastName,
  email,
  subject,
  message,
});
