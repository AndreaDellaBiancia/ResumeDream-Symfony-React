// import components
import Data from './Data';
import Model from './Model';

// import styles
import './styles.scss';

const Generator = () => (
  <section className="create-resume__generator">
    {/* composant Datas */}

    <div className="create-resume__generator__datas-list">
      <Data
        title="Données Personnelles"
        stateName="personalData"
        endPoint="donnees-personelles"
        objectName="personal_datas"
        itemName="first_name"
        itemPlace="last_name"
      />
      <Data
        title="Expériences"
        stateName="experiences"
        endPoint="work-experience"
        objectName="work_experience"
        itemName="role"
        itemPlace="company_name"
      />
      <Data
        title="Formations"
        stateName="educations"
        endPoint="formation"
        objectName="education"
        itemName="certificate"
        itemPlace="school_name"
      />
      <Data
        title="Langues"
        stateName="language"
        endPoint="langue"
        objectName="language"
        itemName="name"
        itemPlace="level"
      />
      <Data
        title="Activités"
        stateName="activity"
        endPoint="activite"
        objectName="activity"
        itemName="title"
        itemPlace=""
      />
      <Data
        title="Compétences"
        stateName="skill"
        endPoint="skill"
        objectName="skill"
        itemName="title"
        itemPlace=""
      />
      <Data
        title="Réseaux sociaux"
        stateName="socialNetwork"
        endPoint="reseaux-sociaux"
        objectName="social_network"
        itemName="name"
        itemPlace="link"
      />
    </div>

    {/* composant Template */}
    <Model />
  </section>
);

export default Generator;
