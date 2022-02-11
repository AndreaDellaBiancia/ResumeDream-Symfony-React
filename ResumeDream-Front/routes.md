### Main
| Routes | Méthode HTTP | URL API |
|--|--|--|
| `/v1/` | `GET` | `/api/v1/` |

### CONNEXION
| Routes | Méthode HTTP | URL API |
|--|--|--|
| `/v1/login` | `POST` | `/api/v1/login` |

### INSCRIPTION
| Routes | Méthode HTTP | URL API |
|--|--|--|
| `/v1/inscription` | `POST` | `/api/v1/inscription` | 

### PERSONAL AREA
| Routes | Méthode HTTP | URL API |
|--|--|--|
| `/v1/mon-espace` | `GET` | `/api/v1/mon-espace` | 
| `/v1/mon-espace/profil` | `GET` | `/api/v1/mon-espace/profil` | 

### EXPERIENCES
| Routes | Méthode HTTP | URL API |
|--|--|--|
| `/v1/mon-espace/profil/experience` | `GET` | `/api/v1/mon-espace/profil/experience` |
| `/v1/mon-espace/profil/experience/{id}` | `GET` | `/api/v1/mon-espace/profil/experience/{id}` | 
| `/v1/mon-espace/profil/experience/{id}` | `PUT` `PATCH` | `/api/v1/mon-espace/profil/experience/{id}`| 
| `/v1/mon-espace/profil/experience` | `POST` | `/api/v1/mon-espace/profil/experience` | 
| `/v1/mon-espace/profil/experience/{id}` | `DELETE` | `/api/v1/mon-espace/profil/experience/{id}` |

### SKILLS
| Routes | Méthode HTTP | URL API |
|--|--|--|
| `/v1/mon-espace/profil/competences` | `GET` | `/api/v1/mon-espace/profil/competences` | 
| `/v1/mon-espace/profil/competences/{id}` | `GET` | `/api/v1/mon-espace/profil/competences/{id}` |
| `/v1/mon-espace/profil/competences/{id}` | `PUT` `PATCH` | `/api/v1/mon-espace/profil/competences/{id}`| 
| `/v1/mon-espace/profil/competences` | `POST` | `/api/v1/mon-espace/profil/competences` |
| `/v1/mon-espace/profil/competences/{id}` | `DELETE` | `/api/v1/mon-espace/profil/competences/{id}` |

### EDUCATIONS
| Routes | Méthode HTTP | URL API |
|--|--|--|
| `/v1/mon-espace/profil/formation` | `GET` | `/api/v1/mon-espace/profil/formation` |
| `/v1/mon-espace/profil/formation/{id}` | `GET` | `/api/v1/mon-espace/profil/formation/{id}` |
| `/v1/mon-espace/profil/formation/{id}` | `PUT` `PATCH` | `/api/v1/mon-espace/profil/formation/{id}`|
| `/v1/mon-espace/profil/formation` | `POST` | `/api/v1/mon-espace/profil/formation` |
| `/v1/mon-espace/profil/formation/{id}` | `DELETE` | `/api/v1/mon-espace/profil/formation/{id}` | 

### ACTIVITIES
| Routes | Méthode HTTP | URL API |
|--|--|--|
| `/v1/mon-espace/profil/activite` | `GET` | `/api/v1/mon-espace/profil/activite` | 
| `/v1/mon-espace/profil/activite/{id}` | `GET` | `/api/v1/mon-espace/profil/activite` | 
| `/v1/mon-espace/profil/activite/{id}` | `PUT` `PATCH` | `/api/v1/mon-espace/profil/activite`| 
| `/v1/mon-espace/profil/activite` | `POST` | `/api/v1/mon-espace/profil/activite` |
| `/v1/mon-espace/profil/activite/{id}` | `DELETE` | `/api/v1/mon-espace/profil/activite` |

### LANGUAGES
| Routes | Méthode HTTP | URL API |
|--|--|--|
| `/v1/mon-espace/profil/langue` | `GET` | `/api/v1/mon-espace/profil/langue` |
| `/v1/mon-espace/profil/langue/{id}` | `GET` | `/api/v1/mon-espace/profil/langue/{id}` |
| `/v1/mon-espace/profil/langue/{id}` | `PUT` `PATCH` | `/api/v1/mon-espace/profil/langue/{id}` |
| `/v1/mon-espace/profil/langue` | `POST` | `/api/v1/mon-espace/profil/langue` |
| `/v1/mon-espace/profil/langue/{id}` | `DELETE` | `/api/v1/mon-espace/profil/langue/{id}` |

### SOCIAL_NETWORK
| Routes | Méthode HTTP | URL API |
|--|--|--|
| `/v1/mon-espace/profil/reseaux-sociaux` | `GET` | `/api/v1/mon-espace/profil/reseaux-sociaux` |
| `/v1/mon-espace/profil/reseaux-sociaux/{id}` | `GET` | `/api/v1/mon-espace/profil/reseaux-sociaux/{id}` |
| `/v1/mon-espace/profil/reseaux-sociaux/{id}` | `PUT` `PATCH` | `/api/v1/mon-espace/profil/reseaux-sociaux/{id}` |
| `/v1/mon-espace/profil/reseaux-sociaux` | `POST` | `/api/v1/mon-espace/profil/reseaux-sociaux` |
| `/v1/mon-espace/profil/reseaux-sociaux/{id}` | `DELETE` | `/api/v1/mon-espace/profil/reseaux-sociaux/{id}` |


### PERSONAL DATA
| Routes | Méthode HTTP | URL API |
|--|--|--|
| `/v1/mon-espace/profil/donnees-personelles` | `GET` | `/api/v1/mon-espace/profil/donnees-personelles` |
| `/v1/mon-espace/profil/donnees-personelles/{id}` | `GET` | `/api/v1/mon-espace/profil/donnees-personelles/{name}` |
| `/v1/mon-espace/profil/donnees-personelles/{id}` | `PUT` `PATCH` | `/api/v1/mon-espace/profil/donnees-personelles/{name}`|
| `/v1/mon-espace/profil/donnees-personelles` | `POST` | `/api/v1/mon-espace/profil/donnees-personelles` |
| `/v1/mon-espace/profil/donnees-personelles/{id}` | `DELETE` | `/api/v1/mon-espace/profil/donnees-personelles/{name}` |


### CV
| Routes | Méthode HTTP | URL API |
|--|--|--|
| `/v1/mon-espace/mes-cv` | `GET` | `/api/v1/mon-espace/mes-cv` |
| `/v1/mon-espace/mes-cv/{id}` | `GET` | `/api/v1/mon-espace/mes-cv/{id}` |
| `/v1/mon-espace/mes-cv/{id}` | `PUT` `PATCH` | `/api/v1/mon-espace/mes-cv/{id}` |
| `/v1/mon-espace/mes-cv` | `POST` | `/api/v1/mon-espace/mes-cv` |
| `/v1/mon-espace/mes-cv/{id}` | `DELETE` | `/api/v1/mon-espace/mes-cv/{id}` |
