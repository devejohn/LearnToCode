import { useState } from "react";
import { IAlert } from "./Alert.type";
import "./AlertList.style.css";
import AlertModal from "./AlertModal";

type Props = {
  list: IAlert[];
  onDeleteClickHnd: (data: IAlert) => void;
  onEdit: (data: IAlert) => void;
};

const AlertList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IAlert | null);

  const viewAlert = (data: IAlert) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <div>
      <article>
        <h3 className="list-header">Alert List</h3>
      </article>
      <table>
        <tr>
          <th>title</th>
          <th>type</th>
          <th>message</th>
          <th>Action</th>
        </tr>
        {list.map((alert) => {
          return (
            <tr key={alert.id}>
              <td>{`${alert.title}`}</td>
              <td>{alert.type}</td>
              <td>{alert.message}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="View"
                    onClick={() => viewAlert(alert)}
                  />
                  <input
                    type="button"
                    value="Edit"
                    onClick={() => onEdit(alert)}
                  />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHnd(alert)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      {showModal && dataToShow !== null && (
        <AlertModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default AlertList;
