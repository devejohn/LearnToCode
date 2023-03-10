import { useState } from "react";
import { IAlert } from "./Alert.type";
import "./AlertForm.style.css";

type Props = {
  onBackBtnClickHnd: () => void;
  onSubmitClickHnd: (data: IAlert) => void;
};

const AddAlert = (props: Props) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");

  const { onBackBtnClickHnd, onSubmitClickHnd } = props;

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
    const data: IAlert = {
      id: new Date().toJSON().toString(),
      title: title,
      type: type,
      message: message,
    };
    onSubmitClickHnd(data);
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
          <label>type : </label>
          <input type="text" value={type} onChange={onTypeChangeHnd} />
        </div>
        <div>
          <label>Message: </label>
          <input type="text" value={message} onChange={onMessageChangeHnd} />
        </div>
        <div>
          <input type="button" value="Back" onClick={onBackBtnClickHnd} />
          <input type="submit" value="Add Alert" />
        </div>
      </form>
    </div>
  );
};

export default AddAlert;
