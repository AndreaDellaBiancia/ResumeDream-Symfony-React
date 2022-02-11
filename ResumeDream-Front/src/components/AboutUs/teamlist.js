import './styles.scss';
import TeamCard from './teamcard';

const TeamList = () => (
  <section className="team-list">
    <h1 className="team-list__title">Notre équipe</h1>
    <div className="team-list__profile">
      <TeamCard name="Édouard" rôle="Project manager" imgSrc="https://ca.slack-edge.com/T024XJVRLBC-U026C8QBLAX-532e24405a94-512" githubSrc="https://github.com/edoudup" linkedinSrc="/" />
      <TeamCard name="Xavier" rôle="Product owner" imgSrc="https://media-exp1.licdn.com/dms/image/C4D03AQGyMFcjGnXSUQ/profile-displayphoto-shrink_400_400/0/1623791315962?e=1644451200&v=beta&t=rSYnKPEMiV58Ppc01GkGl2Slm1y7F2WtFNVxBeV_xqE" githubSrc="https://github.com/XavierJoliot" linkedinSrc="https://www.linkedin.com/in/xavier-joliot-12a4a9133/" />
      <TeamCard name="Ophélie" rôle="Lead developer front" imgSrc="https://avatars.githubusercontent.com/u/86596476?v=4" githubSrc="https://github.com/OphelieT" linkedinSrc="https://www.linkedin.com/in/ophelie-thomm/" />
      <TeamCard name="Andrea" rôle="Lead developer back" imgSrc="https://media-exp1.licdn.com/dms/image/C5603AQEe3SNEqJDJ9g/profile-displayphoto-shrink_800_800/0/1641899322014?e=1649289600&v=beta&t=O728nnHvK_v_CYDh82Z8pax_Sy2RWKRCMEnRneywk7Q" githubSrc="https://github.com/AndreaDellaBiancia" linkedinSrc="https://www.linkedin.com/in/andrea-della-biancia-8080338b/" />
      <TeamCard name="Nathan" rôle="Git master" imgSrc="https://ca.slack-edge.com/T024XJVRLBC-U02JY6AHV4Y-995ee8155943-512" githubSrc="https://github.com/cajudeleite" linkedinSrc="https://www.linkedin.com/in/nathandod/" />
    </div>

  </section>
);

export default TeamList;
