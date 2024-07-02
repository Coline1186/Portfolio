import PropTypes from "prop-types";
import cv from "../../assets/cv/cv portfolio.png";
import "./Modal.css";
import { useEffect } from "react";

function Modal({ setModalOpen, close }) {
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const width = window.innerWidth;
    const min = 1060;
    if (min - width===1060) window.scrollTo(0, 1134);
  }, []);

  return (
    <div
      id="modal"
      onClick={() => {
        close();
      }}
    >
      <button type="button" onClick={handleCloseModal} className="btn-close">
        X
      </button>
      <div className="container-img-modal">
        <img src={cv} alt="Mon CV" className="cv-modal" />
      </div>
    </div>
  );
}
Modal.propTypes = {
  setModalOpen: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};
export default Modal;
