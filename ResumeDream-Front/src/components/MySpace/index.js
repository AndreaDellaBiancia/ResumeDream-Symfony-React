import './styles.scss';
import Welcome from './welcome';
import SideBar from '../Sidebar';
import MyProfile from './myProfile';

const MySpace = () => {
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
    <main className="my-space">
      <Welcome />
      <div className="my-space__sidebar" id="sidebar">
        <SideBar />
      </div>
      <MyProfile />
    </main>
  );
};

export default MySpace;
