import Modelcv from './Modelcv';
import templateData from '../../templateData';

const Library = () => (

  <div className="home__library">
    <div className="home__library__description">
      <h2 className="home__library__description__title"> Une large bibliothèque de CV pour tous les domaines</h2>
      <p className="home__library__description__txt">
        Découvrez nos modèles de CV
      </p>
    </div>
    <div className="home__library__img">

      { templateData.map(
        (item) => (
          <Modelcv
            key={item.id}
            id={item.id}
            imgCv={item.imgCv}
            name={item.name}
          />
        ),
      )}
    </div>
  </div>

);

export default Library;
