import { useDispatch } from "react-redux";
import { closeModal } from "../store/modalSlice";
import { calculateTotal, clearCart } from "../store/cartSlice";

const Modal = () => {
  const dispatch = useDispatch();
  const handleConfirm = () => {
    dispatch(clearCart());
    dispatch(calculateTotal());
    dispatch(closeModal());
  };
  const handleCancel = () => {
    dispatch(closeModal());
  };
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            type="button"
            className="btn confirm-btn"
            onClick={handleConfirm}
          >
            confirm
          </button>
          <button
            type="button"
            className="btn clear-btn"
            onClick={handleCancel}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
