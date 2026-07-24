// import React, { useState } from "react";
import Modal from "../../Modal";
import LoginScreen from "./LoginScreen";
// import closeIcon from "../../Assets/images/close.png";
// import { IoMdMail } from "react-icons/io";
// import { FaLock } from "react-icons/fa6";
import "./Modal.css";

const LoginModal = ({ closeFn = () => null, open = false, openRegisterModal = () => null, openQuizModal = () => null }) => {
  return (
    <Modal open={open}>
      <LoginScreen closeFn={closeFn} openRegisterModal={openRegisterModal} openQuizModal={openQuizModal} />
    </Modal>
  );
};

export default LoginModal;
