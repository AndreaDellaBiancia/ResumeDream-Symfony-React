// == Import
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// import components
import AboutUs from '../AboutUs';
import Home from '../Home';
import CreateResume from '../CreateResume';
import Contact from '../Contact';
import LogIn from '../LogIn';
import Register from '../Register';
import Error from '../Error';
import Faq from '../Faq';
import Legals from '../Legals';
import Template from '../Template';
import Library from '../Library';
import HeaderNavigation from '../HeaderNavigation';
import FooterNavigation from '../FooterNavigation';
import MySpace from '../MySpace';
import UserDatasList from '../UserDatasList';

// import Styles
import './styles.scss';

// == Composant
const App = () => {
  // useLocation for see if url change
  const location = useLocation();
  // scroll top on page changing
  useEffect(
    () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    },
    [location],
  );
  // check if user is logged
  const logged = localStorage.getItem('logged') === 'true';

  const template = location.pathname !== '/template';

  return (
    <div className="app">
      <>
        {/* Menu header */}
        {template && <HeaderNavigation />}

        {/* routage */}
        <Routes>
          {/* first level page */}
          <Route path="/" element={<Home />} />
          <Route path="/a-propos-de-nous" element={<AboutUs />} />
          <Route path="/creer-mon-cv" element={<CreateResume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/connexion" element={<LogIn />} />
          <Route path="/inscription" element={<Register />} />
          <Route path="/template" element={<Template />} />

          {/* when is logged level page */}
          {logged && <Route path="/mon-espace" element={<MySpace />} />}
          {logged && <Route path="/bibliotheque" element={<Library />} />}
          {logged && <Route path="/informations" element={<UserDatasList />} />}

          {/* second level page */}
          <Route path="/faq" element={<Faq />} />
          <Route path="/legals" element={<Legals />} />

          {/* temlplate page for export */}
          {logged && <Route path="/template" element={<Template />} />}

          {/* error page */}
          <Route path="*" element={<Error />} />

        </Routes>

        {/* Menu footer */}
        {template && <FooterNavigation />}
      </>
    </div>
  );
};

// == Export
export default App;
