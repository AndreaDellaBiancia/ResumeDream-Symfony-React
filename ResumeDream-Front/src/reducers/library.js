import { SET_CHANGE_CURRENT_TEMPLATE } from '../actions/library';

const initialState = {
  currentTemplate: '',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CHANGE_CURRENT_TEMPLATE: {
      return {
        ...state,
        currentTemplate: action.currentTemplate,
      };
    }
    // créer une action type ( click sur lien dispatch evt avec valeur)
    // intercepter l'action, récup la valeur pour set le currentTemplate
    // page condition charger feuille de style, enlever le importe scss,
    // mettre un link steelsheet html du composant
    // je recup un current state

    default:
      return state;
  }
};

export default reducer;
