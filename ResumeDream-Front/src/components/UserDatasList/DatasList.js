import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteToState, getDataFromApi, patchToState } from '../../actions/api';
import DataListInformations from './DataListInformations';

const DatasList = () => {
  const dispatch = useDispatch();

  const {
    title,
    currentState,
    statePropertyName,
    endPoint,
  } = useSelector((state) => state.userDataList);

  useEffect(
    () => {
      dispatch(getDataFromApi(currentState, endPoint));
    },
    [endPoint],
  );

  const currentStateTest = useSelector((state) => state.experiences.work_experience);

  console.log((state) => state.language.language);

  const handleClickEdit = (evt) => {
    evt.preventDefault();
    console.log('Je veux editer');
    dispatch(patchToState(currentStateTest, statePropertyName));
  };

  const handleClickTrash = (evt) => {
    evt.preventDefault();
    console.log('Je veux supprimer');
    dispatch(deleteToState(currentStateTest, statePropertyName));
  };

  return (
    <div className="DataList">

      <h1 className="DataListInformations__title">
        {title}
      </h1>

      {
        currentStateTest.map(
          (item) => (
            <DataListInformations key={item.id}>
              <div className="DataListInformations__informations__button">

                <button
                  type="button"
                  onClick={handleClickEdit}
                  className="DataListInformations__informations__button__edit"
                >
                  &#128393;
                </button>

                <button
                  type="button"
                  onClick={handleClickTrash}
                  className="DataListInformations__informations__button__trash"
                >
                  &#128465;
                </button>

              </div>
              {(statePropertyName || []).map((dataInformations) => (


                <div className="DataListInformations__informations__datas" key={dataInformations.id}>

                  <div className="DataListInformations__informations__datas__text">
                    <p> {dataInformations.content} </p>
                    <div>{item[dataInformations]} </div>
                  </div>

                </div>
              ))}
            </DataListInformations>
          ),
        )
      }

    </div>
  );
};

export default DatasList;
