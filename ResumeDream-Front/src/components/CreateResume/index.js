// import component
import AddDataModal from '../AddDataModal';
import Control from './Control';
import Explication from './Explication';
import Generator from './Generator';

// import styles
import './styles.scss';

const CreateResumme = () => (
  <main className="create-resume">
    {/* Data Modal */}
    <AddDataModal />

    {/* Explication component */}
    <Explication />

    {/* Control component */}
    <Control />

    {/* Generator component */}
    <Generator />

  </main>
);

export default CreateResumme;
