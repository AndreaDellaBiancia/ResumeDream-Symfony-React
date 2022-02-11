### Main
| Routes | Nom de la route | Méthode HTTP | Controller | ->méthode() |
|--|--|--|--|--|
| `/api/v1/` | `landing_page` | `GET` | `src\Controller\Api\MainController` |  `landingPage` |
| `/api/v1/inscription` | `register` | `POST` | `src\Controller\Api\MainController` |`register`|

### CONNEXION
| `/login` | `app_login` | `POST` | `src\Controller\Api\SecurityController` |  `login` |
### DECONNEXION
| `/logout` | `app_logout` | `POST` | `src\Controller\Api\SecurityController` |  `logout` |


### PERSONAL AREA
| Routes | Nom de la route | Méthode HTTP | Controller | ->méthode() |
|--|--|--|--|--|
| `/api/v1/mon-espace` | `mon_espace` | `GET` | `src\Controller\Api\HomeController` |`browse`|  

### PROFIL
| Routes | Nom de la route | Méthode HTTP | Controller | ->méthode() |
|--|--|--|--|--|
|`/api/v1/mon-espace/profil/user/read`| `user_read` | `GET` | `src\Controller\Api\ProfileController` |`read`| 
|`/api/v1/mon-espace/profil/user/edit`| `user_edit` | `PUT` `PATCH` | `src\Controller\Api\ProfileController`|`edit`| 


### EXPERIENCES
| Routes | Nom de la route | Méthode HTTP | Controller | ->méthode() |
|--|--|--|--|--|
| `/api/v1/mon-espace/profil/work-experience` | `experience_browse` | `GET` | `src\Controller\Api\ExperienceController` |`browse`| 
| `/api/v1/mon-espace/profil/work-experience/{id}` | `experience_read` | `GET` | `src\Controller\Api\ExperienceController` |`read`| 
| `/api/v1/mon-espace/profil/work-experience/{id}` | `experience_edit` | `PUT` `PATCH` | `src\Controller\Api\ExperienceController`|`edit`| 
| `/api/v1/mon-espace/profil/work-experience` | `experience_add` | `POST` | `src\Controller\Api\ExperienceController` |`add`| 
| `/api/v1/mon-espace/profil/work-experience/{id}` | `experience_delete` | `DELETE` | `src\Controller\Api\ExperienceController` |`delete`| 

### SKILLS
| Routes | Nom de la route | Méthode HTTP | Controller | ->méthode() |
|--|--|--|--|--|
| `/api/v1/mon-espace/profil/skill` | `skill_browse` | `GET` | `src\Controller\Api\SkillController` |`browse`| 
| `/api/v1/mon-espace/profil/skill/{id}` | `skill_read` | `GET` | `src\Controller\Api\SkillController` |`read`| 
| `/api/v1/mon-espace/profil/skill/{id}` | `skill_edit` | `PUT` `PATCH` | `src\Controller\Api\SkillController`|`edit`| 
| `/api/v1/mon-espace/profil/skill` | `skill_add` | `POST` | `src\Controller\Api\SkillController` |`add`| 
| `/api/v1/mon-espace/profil/skill/{id}` | `skill_delete` | `DELETE` | `src\Controller\Api\SkillController` |`delete`| 

### EDUCATIONS
| Routes | Nom de la route | Méthode HTTP | Controller | ->méthode() |
|--|--|--|--|--|
| `/api/v1/mon-espace/profil/formation` | `education_browse` | `GET` | `src\Controller\Api\EducationController` |`browse`| 
| `/api/v1/mon-espace/profil/formation/{id}` | `education_read` | `GET` | `src\Controller\Api\EducationController` |`read`| 
| `/api/v1/mon-espace/profil/formation/{id}` | `education_edit` | `PUT` `PATCH` | `src\Controller\Api\EducationController`|`edit`| 
| `/api/v1/mon-espace/profil/formation` | `education_add` | `POST` | `src\Controller\Api\EducationController` |`add`| 
| `/api/v1/mon-espace/profil/formation/{id}` | `education_delete` | `DELETE` | `src\Controller\Api\EducationController` |`delete`| 

### ACTIVITIES
| Routes | Nom de la route | Méthode HTTP | Controller | ->méthode() |
|--|--|--|--|--|
| `/api/v1/mon-espace/profil/activite` | `activity_browse` | `GET` | `src\Controller\Api\ActivityController` |`browse`| 
| `/api/v1/mon-espace/profil/activite/{id}` | `activity_read` | `GET` | `src\Controller\Api\ActivityController` |`read`| 
| `/api/v1/mon-espace/profil/activite/{id}` | `activity_edit` | `PUT` `PATCH` | `src\Controller\Api\ActivityController`|`edit`| 
| `/api/v1/mon-espace/profil/activite` | `activity_add` | `POST` | `src\Controller\Api\ActivityController` |`add`| 
| `/api/v1/mon-espace/profil/activite/{id}` | `activity_delete` | `DELETE` | `src\Controller\Api\ActivityController` |`delete`| 

### LANGUAGES
| Routes | Nom de la route | Méthode HTTP | Controller | ->méthode() |
|--|--|--|--|--|
| `/api/v1/mon-espace/profil/langue` | `language_browse` | `GET` | `src\Controller\Api\LanguageController` |`browse`| 
| `/api/v1/mon-espace/profil/langue/{id}` | `language_edit` | `PUT` `PATCH` | `src\Controller\Api\LanguageController`|`edit`| 
| `/api/v1/mon-espace/profil/langue` | `language_add` | `POST` | `src\Controller\Api\LanguageController` |`add`| 
| `/api/v1/mon-espace/profil/langue/{id}` | `language_delete` | `DELETE` | `src\Controller\Api\LanguageController` |`delete`|

### SOCIAL_NETWORK
| Routes | Nom de la route | Méthode HTTP | Controller | ->méthode() |
|--|--|--|--|--|
| `/api/v1/mon-espace/profil/reseaux-sociaux` | `social_network_browse` | `GET` | `src\Controller\Api\SocialNetworkController` |`browse`| 
| `/api/v1/mon-espace/profil/reseaux-sociaux/{id}` | `social_network_edit` | `PUT` `PATCH` | `src\Controller\Api\SocialNetworkController`|`edit`| 
| `/api/v1/mon-espace/profil/reseaux-sociaux` | `social_network_add` | `POST` | `src\Controller\Api\SocialNetworkController` |`add`| 
| `/api/v1/mon-espace/profil/reseaux-sociaux/{id}` | `social_network_delete` | `DELETE` | `src\Controller\Api\SocialNetworkController` |`delete`| 


### PERSONAL DATA
| Routes | Nom de la route | Méthode HTTP | Controller | ->méthode() |
|--|--|--|--|--| 
| `/api/v1/mon-espace/profil/donnees-personelles` | `personal_data_browse` | `GET` | `src\Controller\Api\PersonalDataController` |`browse`| 
| `/api/v1/mon-espace/profil/donnees-personelles/{id}` | `personal_data_read` | `GET` | `src\Controller\Api\PersonalDataController` |`read`| 
| `/api/v1/mon-espace/profil/donnees-personelles/{id}` | `personal_data_edit` | `PUT` `PATCH` | `src\Controller\Api\PersonalDataController`|`edit`| 
| `/api/v1/mon-espace/profil/donnees-personelles` | `personal_data_add` | `POST` | `src\Controller\Api\PersonalDataController` |`add`| 
| `/api/v1/mon-espace/profil/donnees-personelles/{id}` | `personal_data_delete` | `DELETE` | `src\Controller\Api\PersonalDataController` |`delete`|


### CV
| Routes | Nom de la route | Méthode HTTP | Controller | ->méthode() |
|--|--|--|--|--|
| `/api/v1/mon-espace/mes-cv` | `cv_browse` | `GET` | `src\Controller\Api\CvController` |`browse`| 
| `/api/v1/mon-espace/mes-cv/{id}` | `cv_read` | `GET` | `src\Controller\Api\CvController` |`read`| 
| `/api/v1/mon-espace/mes-cv/{id}` | `cv_edit` | `PUT` `PATCH` | `src\Controller\Api\CvController`|`edit`| 
| `/api/v1/mon-espace/mes-cv` | `cv_add` | `POST` | `src\Controller\Api\CvController` |`add`| 
| `/api/v1/mon-espace/mes-cv/{id}` | `cv_delete` | `DELETE` | `src\Controller\Api\CvController` |`delete`|

### USER
| Routes | Nom de la route | Méthode HTTP | Controller | ->méthode() |
|--|--|--|--|--|
| `/admin/user` | `user_browse` | `GET` | `src\Controller\Back\UserController` |`browse`| 
| `/admin/user/{id}` | `user_read` | `GET` | `src\Controller\Back\UserController` |`read`| 
| `/admin/user/{id}` | `user_edit` | `PUT` `PATCH` | `src\Controller\Back\userController`|`edit`| 
| `/admin/user/{id}` | `user_delete` | `DELETE` | `src\Controller\Back\UserController` |`delete`| 

### TEMPLATE
| Routes | Nom de la route | Méthode HTTP | Controller | ->méthode() |
|--|--|--|--|--|
| `/admin/template` | `template_browse` | `GET` | `src\Controller\Back\TemplateController` |`browse`| 
| `/admin/template/{id}` | `template_edit` | `PUT` `PATCH` | `src\Controller\Back\TemplateController`|`edit`| 
| `/admin/template` | `template_add` | `POST` | `src\Controller\Back\TemplateController` |`add`| 
| `/admin/template/{id}` | `template_delete` | `DELETE` | `src\Controller\Back\TemplateController` |`delete`| 
