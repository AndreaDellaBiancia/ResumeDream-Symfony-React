// import styles
import './poseidonStyle.scss';

import PersonalData from './personalData';
import Skills from './skills';
import Education from './education';
import Activity from './activity';
import Language from './language';
import Experience from './experience';
import SocialNetwork from './socialNetwork';

const Template = () => (
  <section className="template__page">
    <div className="template__page__cv">
      <PersonalData />
      <Skills />
      <Education />
      <Activity />
      <Language />
      <Experience />
      <SocialNetwork />
    </div>
  </section>
);

export default Template;
