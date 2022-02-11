import './styles.scss';
import { useSelector } from 'react-redux';

const Welcome = () => {
  const name = useSelector((state) => state.personalData.personal_datas.first_name);
  return (
    <section className="welcome">
      <div className="welcome__title"><h1>Mon espace personnel</h1></div>
      <div className="welcome__name"><h2>Très heureux de te revoir, {name}</h2></div>
    </section>
  );
};

export default Welcome;
