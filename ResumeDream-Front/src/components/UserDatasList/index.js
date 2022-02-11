import './styles.scss';

// import Utils
import Sidebar from '../Sidebar';
import DatasList from './DatasList';

const UserDatasList = () => (
  <main className="userDatasList">
    <div className="userDatasList__page">
      <section className="userDatasList__page__sidebar">
        <Sidebar />
      </section>
      <section className="userDatasList__page__list">
        <DatasList />
      </section>
    </div>
  </main>
);

export default UserDatasList;
