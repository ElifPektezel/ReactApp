import React from "react";
import { useDispatch } from "react-redux";
import { TfiClose } from "react-icons/tfi";
import { modalFunc } from "../redux/modalSlices";
import '../style/Modal.css';

const Modal = ({ title, content, btnText, btnFunc }) => {
const dispatch = useDispatch()
  return (
    <div className="Modal">
      <div className="ModalCard">
        <div className="ModalNav">
          <div className="ModalNavTitle"> {title} </div>
          <TfiClose onClick={() => dispatch(modalFunc())} size={24} />
        </div>
       {content}
      </div>
    </div>
  );
};

export default Modal;
