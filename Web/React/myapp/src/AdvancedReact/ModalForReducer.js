import React, { useEffect } from "react";

const ModalForReducer = ({ msg, closeModal }) => {
  console.log(closeModal);
  useEffect(() => {
    setTimeout(closeModal, 3000);
  });
  return (
    <div>
      <h3>{msg}</h3>
    </div>
  );
};

export default ModalForReducer;
