import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { openModal } from "../store/modalSlice";
import { useEffect } from "react";
import { calculateTotal, fetchProducts } from "../store/cartSlice";

const Cart = () => {
  const { cartItems, total, isLoading } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    if (cartItems.length > 0) {
      dispatch(openModal());
    }
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (isLoading) {
    return <h1>loading</h1>;
  }

  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartItems.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      {/* cart footer */}
      {cartItems.length > 0 ? (
        <footer>
          <hr />
          <div className="cart-total">
            <h4>
              total <span>${total}</span>
            </h4>
          </div>
          <button className="btn clear-btn" onClick={handleClearCart}>
            clear cart
          </button>
        </footer>
      ) : (
        <h4>Your cart is empty</h4>
      )}
    </section>
  );
};
export default Cart;
