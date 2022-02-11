import './styles.scss';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setdataListState } from '../../actions/UserDataList';

const SideBarItem = ({
  content, color, state, statePropertyName, endPoint, method, id,
}) => {
  const dispatch = useDispatch();

  return (
    <div
      className="sidebar__item"
      style={{ backgroundColor: color }}
      onClick={() => {
        dispatch(setdataListState(id, state, statePropertyName, endPoint, content));
        method();
      }}
    >
      <a>{content}</a>
    </div>
  );
};

SideBarItem.propTypes = {
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  statePropertyName: PropTypes.array.isRequired,
  endPoint: PropTypes.string.isRequired,
  method: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default SideBarItem;
