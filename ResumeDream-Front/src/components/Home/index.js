import './styles.scss';
import Creation from './Creation';
import Presentation from './Presentation';
import Video from './Video';
import Library from './Library';
import Register from './Register';

const Home = () => (

  <main className="home">

    {/* call all the differents components to create my page 
      and have not too many code in the same document */}

    <Creation />

    <Presentation />

    <Video />

    <Library />

    <Register />

  </main>
);

export default Home;
