import { useEffect, useState } from "react";
import AddAlert from "./AddAlert";
import EditAlert from "./EditAlert";
import { IAlert, PageEnum } from "./Alert.type";
import AlertList from "./AlertList";
import "./Home.style.css";

const Home = () => {
  const [alertList, setAlertList] = useState([] as IAlert[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IAlert);

  useEffect(() => {
    const listInString = window.localStorage.getItem("AlertList");
    if (listInString) {
      _setAlertList(JSON.parse(listInString));
    }
  }, []);

  const onAddAlertClickHnd = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const _setAlertList = (list: IAlert[]) => {
    setAlertList(list);
    window.localStorage.setItem("AlertList", JSON.stringify(list));
  };

  const addAlert = (data: IAlert) => {
    _setAlertList([...alertList, data]);
  };

  const deleteAlert = (data: IAlert) => {
    // To Index from array i,e alertList
    // Splice that
    // Update new record

    const indexToDelete = alertList.indexOf(data);
    const tempList = [...alertList];

    tempList.splice(indexToDelete, 1);
    _setAlertList(tempList);
  };

  const editAlertData = (data: IAlert) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IAlert) => {
    const filteredData = alertList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = alertList.indexOf(filteredData);
    const tempData = [...alertList];
    tempData[indexOfRecord] = data;
    _setAlertList(tempData);
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h1>React: Simple CRUD Application</h1>
        </header>
      </article>

      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Alert"
              onClick={onAddAlertClickHnd}
              className="add-alert-btn"
            />
            <AlertList
              list={alertList}
              onDeleteClickHnd={deleteAlert}
              onEdit={editAlertData}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddAlert
            onBackBtnClickHnd={showListPage}
            onSubmitClickHnd={addAlert}
          />
        )}

        {shownPage === PageEnum.edit && (
          <EditAlert
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Home;
