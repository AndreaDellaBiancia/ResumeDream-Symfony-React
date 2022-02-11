// import utils
import axios from 'axios';

// import actions
import { SEND_REGISTER_DATAS_TO_API } from '../actions/register';
import { postLogDatasFromApi, POST_LOG_DATAS_FROM_API } from '../actions/login';
import {
  GET_DATA_FROM_API,
  POST_DATA_TO_API,
  setNewStateActivity,
  setNewStateEducation,
  setNewStateExperience,
  setNewStateLanguage,
  setNewStatePersonnalData,
  setNewStateSkill,
  setNewStateSocial,
  addToState,
  MODAL_SUBMIT,
  PATCH_TO_STATE,
  patchToState,
  DELETE_TO_STATE,
  deleteToState,
} from '../actions/api';

const apiMiddleware = (store) => (next) => (action) => {
  const api = axios.create({
    baseURL: 'http://localhost:8080',
  });
  switch (action.type) {
    case SEND_REGISTER_DATAS_TO_API: {
      // nickname, email and pasword
      const { nickname, email, password } = store.getState().register;
      const { first, second } = password;
      api
        .post('/api/v1/inscription',
          {
            nickname: nickname,
            email: email,
            password: {
              first: first,
              second: second,
            },
          })
        .then(
          () => {
            store.dispatch(postLogDatasFromApi(email, first));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );

      next(action);
      break;
    }
    case POST_LOG_DATAS_FROM_API: {
      const { username, password } = action;
      api
        .post('/api/login_check',
          {
            username: username,
            password: password,
          })
        .then(
          (response) => {
            localStorage.setItem('token', response.data.token);
            api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
            localStorage.setItem('logged', true);
            document.location.reload();
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );

      next(action);
      break;
    }
    case GET_DATA_FROM_API: {
      const token = localStorage.getItem('token');

      api
        .get(`/api/v1/mon-espace/profil/${action.endPoint}`,
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          })
        .then(
          (response) => {
            if (action.endPoint === 'work-experience') {
              store.dispatch(setNewStateExperience(response.data));
            }
            if (action.endPoint === 'activite') {
              store.dispatch(setNewStateActivity(response.data));
            }
            if (action.endPoint === 'formation') {
              store.dispatch(setNewStateEducation(response.data));
            }
            if (action.endPoint === 'langue') {
              store.dispatch(setNewStateLanguage(response.data));
            }
            if (action.endPoint === 'donnees-personelles') {
              if (response.data) {
                store.dispatch(setNewStatePersonnalData(response.data));
              }
            }
            if (action.endPoint === 'skill') {
              store.dispatch(setNewStateSkill(response.data));
            }
            if (action.endPoint === 'reseaux-sociaux') {
              store.dispatch(setNewStateSocial(response.data));
            }
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );

      next(action);
      break;
    }
    case POST_DATA_TO_API: {
      const token = localStorage.getItem('token');

      api
        .post(`/api/v1/mon-espace/profil/${action.endPoint}`,
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          })
        .then(
          (response) => {
            store.dispatch(addToState(action.stateName, response.data));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );

      next(action);
      break;
    }
    case MODAL_SUBMIT: {
      const token = localStorage.getItem('token');

      const newValue = action.modalValue;

      api
        .post(`/api/v1/mon-espace/profil/${action.endPoint}`,
          newValue,
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          })
        .then(
          (response) => {
            console.log(response);
            document.location.reload();
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );

      next(action);
      break;
    }

    case PATCH_TO_STATE: {
      const token = localStorage.getItem('token');

      api
        .patch(`/api/v1/mon-espace/profil/${action.endPoint}`,
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          })
        .then(
          (response) => {
            store.dispatch(patchToState(action.stateName, response.data));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );

      next(action);
      break;
    }
    case DELETE_TO_STATE: {
      const token = localStorage.getItem('token');

      api
        .delete(`/api/v1/mon-espace/profil/${action.endPoint}/`,
          {
            headers: {
              Authorization: `bearer ${token}`,
            },
          })
        .then(
          (response) => {
            store.dispatch(deleteToState(action.stateProperty, response.data));
          },
        )
        .catch(
          (error) => {
            console.log(error);
          },
        );

      next(action);
      break;
    }
    default:
      next(action);
      break;
  }
};

export default apiMiddleware;
