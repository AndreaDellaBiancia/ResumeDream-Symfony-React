const initialState = {
  questions: [
    {
      id: 1,
      title: 'Combien coûte le service ?',
      content: 'Le site est totalement gratuit! Ça suffit juste de s’inscrire et vous pouvez commencer à créer votre CV!',
    },
    {
      id: 2,
      title: 'Comment puis-je ajouter des informations dans mon CV?',
      content: "Une fois connecté vous serez redirigé sur la page 'Créer mon cv' et sur la gauche vous trouverez un menu avec différents onglets. Vous devrez ensuite cliquer sur l’onglet souhaité et vous découvrirez les informations déjà enregistrées ou vous aurez la possibilité d’en rajouter des nouvelles en appuyant sur le bouton “ajouter une nouvelle entrée”.",
    },
    {
      id: 3,
      title: 'Comment puis-je modifier et supprimer des informations dans mon CV?',
      content: "En appuyant sur le bouton 'Mon Espace' situé en haut à droite vous pourrez accéder à votre espace personnel. Dans cette page il suffira de cliquer sur le menu de gauche pour afficher la liste des informations recherchées. Vous aurez la liste de toutes les données que vous aviez enregistré ! À coté de chaque enregistrement vous trouverez l’image d’une corbeille pour effacer ou d’un stylo pour modifier le champ souhaité.",
    },
  ],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
