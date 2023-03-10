import { IAlert } from "./Alert.type";
import "./AlertModal.style.css";

type Props = {
  onClose: () => void;
  data: IAlert;
};

const AlertModal = (props: Props) => {
  const { onClose, data } = props;
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h3>Alert Data</h3>
        <div>
          <div>
            <label>Title: {data.title}</label>
          </div>
          <div>
            <label>Type : {data.type}</label>
          </div>
          <div>
            <label>Message : {data.message}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
