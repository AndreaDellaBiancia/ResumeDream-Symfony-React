import SideBar from '../Sidebar';
import Modelcv from '../Home/Modelcv';
import templateData from '../../templateData';

import './styles.scss';

const Library = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY < 236) {
      document.getElementById('sidebar').style.position = 'static';
      console.log('all good');
    }
    else if (window.scrollY
      > (document.documentElement.offsetHeight - document.documentElement.clientHeight - 218)) {
      document.getElementById('sidebar').style.position = 'absolute';
      document.getElementById('sidebar').style.bottom = '374px';
      console.log('youpiiii');
    }
    else {
      document.getElementById('sidebar').style.position = 'fixed';
      document.getElementById('sidebar').style.bottom = 'auto';
    }
  });
  return (
    <main className="library">
      <div className="library__page">
        <div className="library__page__sidebar" id="sidebar">
          <SideBar />
        </div>
        <div className="library__page__templates">

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
    </main>
  );
};
export default Library;
