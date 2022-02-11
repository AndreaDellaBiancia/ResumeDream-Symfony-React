import Card from './Card';
import curriculumvitae from '../../assets/images/curriculumvitae.png';
import image from '../../assets/images/image.png';
import usb from '../../assets/images/usb.png';
import share from '../../assets/images/share.png';

const Presentation = () => (
  <div className="home__presentation">

    <h2 className="home__presentation home__presentation__subtitle"> Qu'est ce que Resume Dream ?</h2>

    {/* Call the component Card with value of differents properties to be modify */}
    <Card
      img={curriculumvitae}
      title="Faire un CV qui vous convient !"
      description="La première impression est très importante pour un employeur, notamment quand il voit passer des dizaines de CV. C'est pourquoi votre CV se doit d'être beau et clair. Bonne nouvelle, vous êtes à la bonne place pour ça !"
    />

    <Card
      img={image}
      title="Rapide et facile !"
      description="Notre outil de rédaction de CV en ligne permet aisément à chacun(e) de faire un CV professionnel de manière rapide. "
    />

    <Card
      img={usb}
      title="Télécharger votre CV "
      description="Exportez votre CV en un temps record pour pouvoir l'imprimer ou le télécharger en format PDF. "
    />

    <Card
      img={share}
      title="Réseaux professionnels"
      description="La rédaction d’un CV pertinent et professionel vous distinguera des autres demandeurs d’emploi. Vous disposerez ainsi d’environ 65% de chance supplémentaire pour décrocher une invitation pour un entretien de sélection."
    />

  </div>
);

export default Presentation;
