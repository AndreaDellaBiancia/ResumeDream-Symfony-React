# Dictionnaire de données


## UTILISATEURS (`user`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de l'utilisateur|
|nickname|VARCHAR(255)|NOT NULL|Le nickname de l'utilisateur|
|email|VARCHAR(255)|NOT NULL|Le mail de l'utilisateur|
|password|VARCHAR(255)|NOT NULL|Le mot de passe de l'utilisateur|
|roles|VARCHAR|NOT NULL|Le rôle de l'utilisateur|
|created_at|DATETIME|NOT NULL, DEFAULT CURRENT_DATETIME|La date de création de l'utilisateur|
|updated_at|DATETIME|NULL|La date de la dernière mise à jour de l'utilisateur|


## CV (`cv`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du cv|
|name|VARCHAR(255)|NOT NULL|Le nom du cv|
|created_at|DATETIME|NOT NULL, DEFAULT CURRENT_DATETIME|La date de création du cv|
|updated_at|DATETIME|NULL|La date de la dernière mise à jour du cv|


## TEMPLATES (`template`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant du type du template|
|name|VARCHAR(255)|NOT NULL|Le nom du template|
|style_url|VARCHAR(255)|NOT NULL|L'url du fichier CSS|
|created_at|DATETIME|NOT NULL, DEFAULT CURRENT_DATETIME|La date de création du template|
|updated_at|DATETIME|NULL|La date de la dernière mise à jour du template|


## DONNEES PERSONELLES (`personal_data`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant des données personelles|
|first_name|VARCHAR(255)|NOT NULL|Le prenom du déténteur du cv|
|last_name|VARCHAR(255)|NOT NULL|Le nom du déténteur du cv|
|city|VARCHAR(255)|NOT NULL|La ville du déténteur du cv|
|address|VARCHAR(255)|NULL|L'adresse du déténteur du cv|
|birth_date|DATETIME|NULL|L'année de naissance du déténteur du cv|
|email|VARCHAR(255)|NOT NULL|L'email du déténteur du cv|
|phone_nb|INTEGER|NULL|Le numero de telephone du déténteur du cv|
|picture|VARCHAR(255)|NULL|La photo du déténteur du cv|
|linkedin|VARCHAR(255)|NULL|Le lien du compte Linkedin|
|content|TEXT|NULL|Une brève déscription du déténteur du cv|
|created_at|DATETIME|NOT NULL, DEFAULT CURRENT_DATETIME|La date de création des données personelles|
|updated_at|DATETIME|NULL|La date de la dernière mise à jour des données personelles|

## RESEAUX SOCIAUX (`social_network`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant des données personelles|
|name|VARCHAR(255)|NOT NULL|Le nom de du reseau social|
|link|VARCHAR(255)|NOT NULL|Le lien du reseau social|
|created_at|DATETIME|NOT NULL, DEFAULT CURRENT_DATETIME|La date de création du reseau social|
|updated_at|DATETIME|NULL|La date de la dernière mise à jour du reseau social|


## COMPETENCES GENERALES (`skill`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant d'une competence|
|title|VARCHAR(255)|NOT NULL|Le nom de la competence|
|content|TEXT|NULL|La description de la competence |
|created_at|DATETIME|NOT NULL, DEFAULT CURRENT_DATETIME|La date de création d'une competence|
|updated_at|DATETIME|NULL|La date de la dernière mise à jour d'une competence|


## FORMATIONS (`education`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de la formation|
|certificate|VARCHAR(255)|NOT NULL|Le nom de la formation effectuée|
|school_name|VARCHAR(255)|NULL|Le nom de l'ecole|
|start_date|DATETIME|NOT NULL|La date de debut de la formation|
|end_date|DATETIME|NULL|La date de fin de la formation|
|content|text|NULL|Description de la formation|
|created_at|DATETIME|NOT NULL, DEFAULT CURRENT_DATETIME|La date de création de la formation|
|updated_at|DATETIME|NULL|La date de la dernière mise à jour de la formation|


## ACTIVITES (`activity`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de l'activité|
|title|VARCHAR(255)|NOT NULL|Le nom de l'activité|
|start_date|DATETIME|NOT NULL|La date de debut de l'activité|
|end_date|DATETIME|NULL|La date de fin de l'activité|
|content|text|NULL|Description de l'activité|
|created_at|DATETIME|NOT NULL, DEFAULT CURRENT_DATETIME|La date de création de l'activité|
|updated_at|DATETIME|NULL|La date de la dernière mise à jour de l'activité|


## LANGUES (`language`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de l'activité|
|name|VARCHAR(255)|NOT NULL|Le nom de la langue|
|level|VARCHAR(255)|NULL|Le niveau de la langue|
|created_at|DATETIME|NOT NULL, DEFAULT CURRENT_DATETIME|La date de création de la langue|
|updated_at|DATETIME|NULL|La date de la dernière mise à jour de la langue|


## EXPERIENCES PROFESSIONNELLES (`work_experience`)

|Champ|Type|Spécificités|Description|
|-|-|-|-|
|id|INT|PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT|L'identifiant de l'experience professionnelle|
|company_name|VARCHAR(255)|NOT NULL|Le nom de l'entreprise|
|city|VARCHAR(255)|NULL|La ville de l'entreprise|
|role|VARCHAR(255)|NOT NULL|Le poste dans l'entreprise|
|start_date|DATETIME|NOT NULL|La date de prise de poste|
|end_date|DATETIME|NULL|La date de fin de poste|
|content|text|NULL|Description des missions dans l'entreprise|
|created_at|DATETIME|NOT NULL, DEFAULT CURRENT_DATETIME|La date de création de l'experience professionnelle|
|updated_at|DATETIME|NULL|La date de la dernière mise à jour de l'experience professionnelle|