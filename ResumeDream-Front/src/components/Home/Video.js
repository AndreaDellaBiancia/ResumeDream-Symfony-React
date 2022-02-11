const Video = () => (
  <div className="home__video">

    <div className="home__video__txt">
      <h4 className="home__video__txt__title"> Comment ça fonctionne</h4>
      <ul className="home__video__txt__description">
        <li>Connectez-vous ou créez votre compte en un seul clic</li>
        <li>Choisissez l’un de nos modèles de CV</li>
        <li>Modifiez votre CV</li>
        <li>Téléchargez-le en PDF</li>
      </ul>
    </div>
    <div className="home__video__player">
      <iframe
        title="video_explication"
        className="home__video__player__video"
        src="https://www.youtube.com/embed/vCP8olLjsr8?mute=1"
      />
    </div>
  </div>
);

export default Video;
