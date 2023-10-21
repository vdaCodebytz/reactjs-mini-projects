import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";
import {
  calculateTotal,
  decreaseAmt,
  increaseAmt,
  removeItem,
} from "../store/cartSlice";

const CartItem = ({ item }) => {
  const { id, img, title, price, amount } = item;
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseAmt(id));
    dispatch(calculateTotal());
  };

  const handleDecrease = () => {
    dispatch(decreaseAmt(id));
    dispatch(calculateTotal());
  };

  const handleRemove = () => {
    dispatch(removeItem(id));
    dispatch(calculateTotal());
  };

  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        {/* remove button */}
        <button className="remove-btn" onClick={handleRemove}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" onClick={handleIncrease}>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className="amount">{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" onClick={handleDecrease}>
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
