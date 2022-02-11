import { combineReducers } from 'redux';

import experiencesReducer from './experiences';
import educationsReducer from './educations';
import contactReducer from './contact';
import dataModalsReducer from './dataModals';
import faqReducer from './faq';
import registerReducer from './register';
import personalDataReducer from './personalData';
import skillReducer from './skill';
import activityReducer from './activity';
import languageReducer from './language';
import socialNetworkReducer from './socialNetwork';
import userReducer from './user';
import userDataListReducer from './userDataList';
import libraryReducer from './library';

const rootReducer = combineReducers({
  experiences: experiencesReducer,
  educations: educationsReducer,
  contact: contactReducer,
  dataModals: dataModalsReducer,
  faq: faqReducer,
  register: registerReducer,
  personalData: personalDataReducer,
  skill: skillReducer,
  activity: activityReducer,
  language: languageReducer,
  socialNetwork: socialNetworkReducer,
  user: userReducer,
  userDataList: userDataListReducer,
  library: libraryReducer,
});

export default rootReducer;
