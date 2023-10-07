import { FaTimes } from "react-icons/fa";
import { useAppContext } from "./context";

const Modal = () => {
  let { showModal, setShowModal } = useAppContext();
  return (
    <div className={`modal-overlay ${showModal ? "show-modal" : ""}`}>
      <div className="modal-container">
        <h3>Modal content</h3>
        <button
          className="close-modal-btn"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
