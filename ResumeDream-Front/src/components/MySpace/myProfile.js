import Data from '../CreateResume/Data';
import './styles.scss';

const MyProfile = () => (
  <main className="my-profile">
    <div className="my-profile__section">
      <Data
        title="Données Personnelles"
        stateName="personalData"
        objectName="personal_datas"
        itemName="first_name"
        itemPlace="last_name"
      />
    </div>
    <div className="my-profile__section">
      <Data
        title="Expériences"
        stateName="experiences"
        objectName="work_experience"
        itemName="role"
        itemPlace="company_name"
      />
    </div>
    <div className="my-profile__section">
      <Data
        title="Formations"
        stateName="educations"
        objectName="education"
        itemName="certificate"
        itemPlace="school_name"
      />
    </div>
    <div className="my-profile__section">
      <Data
        title="Langues"
        stateName="language"
        objectName="language"
        itemName="name"
        itemPlace="level"
      />
    </div>
    <div className="my-profile__section">
      <Data
        title="Activités"
        stateName="activity"
        objectName="activity"
        itemName="title"
        itemPlace=""
      />
    </div>
    <div className="my-profile__section">
      <Data
        title="Skills"
        stateName="skill"
        objectName="skill"
        itemName="title"
        itemPlace=""
      />
    </div>
    <div className="my-profile__section">
      <Data
        title="Réseaux sociaux"
        stateName="socialNetwork"
        objectName="social_network"
        itemName="name"
        itemPlace="link"
      />
    </div>
  </main>
);

export default MyProfile;
