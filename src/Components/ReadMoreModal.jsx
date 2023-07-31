import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModalAction } from "../Redux/Modal/Slicer";
const ReadMoreModal = () => {
  const dispatch = useDispatch();
  //Selectors
  const modalState = useSelector((state) => state.modal.modal);
  return (
    <>
      <div id="modal">
        <span onClick={() => dispatch(closeModalAction())}>X</span>
        <h1>{modalState.date}</h1>
        <div>
          <h2>{modalState.title}</h2>
          <h3>{modalState.spicality}</h3>
          <p>{modalState.decription}</p>
        </div>
      </div>
    </>
  );
};

export default ReadMoreModal;
