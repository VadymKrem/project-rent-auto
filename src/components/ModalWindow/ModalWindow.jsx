import { useEffect } from "react";
import { createPortal } from "react-dom";
//import PropTypes from 'prop-types';
import { Overlay, ModalEl } from "./ModalWindow.styled";

const ModalWindow = ({ children, toggleModal }) => {
  useEffect(() => {
    const keyDown = (event) => {
      if (event.code === "Escape") {
        toggleModal();
      }
    };

    window.addEventListener("keydown", keyDown);

    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, [toggleModal]);

  const backdropClick = (event) => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  const modal = (
    <Overlay onClick={backdropClick}>
      <ModalEl>{children}</ModalEl>
    </Overlay>
  );

  return createPortal(modal, document.querySelector("#root_modal"));
};
export default ModalWindow;
