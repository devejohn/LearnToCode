import { useState } from "react";
import { IAlert } from "./Alert.type";
import "./AlertForm.style.css";

type Props = {
  data: IAlert;
  onBackBtnClickHnd: () => void;
  onUpdateClickHnd: (data: IAlert) => void;
};

const EditAlert = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [title, setTitle] = useState(data.title);
  const [type, setType] = useState(data.type);
  const [message, setMessage] = useState(data.message);

  const onTitleChangeHnd = (e: any) => {
    setTitle(e.target.value);
  };

  const onTypeChangeHnd = (e: any) => {
    setType(e.target.value);
  };

  const onMessageChangeHnd = (e: any) => {
    setMessage(e.target.value);
  };

  const onSubmitBtnClickHnd = (e: any) => {
    e.preventDefault();
    const updatedData: IAlert = {
      id: data.id,
      title: title,
      type: type,
      message: message,
    };
    onUpdateClickHnd(updatedData);
    onBackBtnClickHnd();
  };

  return (
    <div className="form-container">
      <div>
        <h3>Add Alert Form</h3>
      </div>
      <form onSubmit={onSubmitBtnClickHnd}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={title}
            onChange={onTitleChangeHnd}
          />
        </div>
        <div>
          <label>Type: </label>
          <input type="text" value={type} onChange={onTypeChangeHnd} />
        </div>
        <div>
          <label>Message: </label>
          <input type="text" value={message} onChange={onMessageChangeHnd} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Update Alert" />
        </div>
      </form>
    </div>
  );
};

export default EditAlert;
