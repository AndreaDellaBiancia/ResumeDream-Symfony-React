import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideBarItem from './item';
import './styles.scss';

const SideBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.setItem('logged', false);
    navigate('/');
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      document.getElementById('dropdown').style.display = 'flex';
    }
    else {
      document.getElementById('dropdown').style.display = 'none';
    }
  };

  const biblio = () => navigate('/bibliotheque');
  const dash = () => navigate('/mon-espace');

  return (
    <section className="sidebar" id="sidebar">
      <SideBarItem content="Tableau de bord" color="#E9E9E9" method={dash} />
      <SideBarItem content="Mon profil" color="#F5F5F5" method={toggleDropdown} />
      <div className="sidebar__dropdown" id="dropdown">
        <SideBarItem content="Données personnelles" color="#E0E0E0" />
        <SideBarItem
          state="experiences.work_experience"
          endPoint="work-experience"
          statePropertyName={['id', 'role', 'company_name', 'city', 'start_date', 'end_date', 'content']}
          content="Expériences"
          color="#E0E0E0"
        />
        <SideBarItem
          state="educations.education"
          endPoint="formation"
          statePropertyName={['id', 'certificate', 'school_name', 'city', 'start_date', 'end_date', 'content']}
          content="Diplômes"
          color="#E0E0E0"
        />
        <SideBarItem
          state="language.language"
          endPoint="langue"
          statePropertyName={['id', 'name', 'level']}
          content="Langues"
          color="#E0E0E0"
        />
        <SideBarItem
          state="activity.activity"
          endPoint="activite"
          statePropertyName={['id', 'title', 'start_date', 'end_date', 'content']}
          content="Activités"
          color="#E0E0E0"
        />
        <SideBarItem
          state="skill.skill"
          endPoint="skill"
          statePropertyName={['id', 'title', 'content']}
          content="Skills"
          color="#E0E0E0"
        />
        <SideBarItem
          state="socialNetwork.social_network"
          endPoint="reseaux-sociaux"
          statePropertyName={['id', 'name', 'link']}
          content="Réseaux sociaux"
          color="#E0E0E0"
        />
      </div>
      <SideBarItem content="Mes CV" color="#E9E9E9" />
      <SideBarItem content="Modèles de CV" color="#F5F5F5" method={biblio} />
      <SideBarItem content="Déconnexion" color="#E9E9E9" method={logout} />
    </section>
  );
};

export default SideBar;
