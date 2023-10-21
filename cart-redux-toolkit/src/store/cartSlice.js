import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

let initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

export const fetchProducts = createAsyncThunk("fetch/products", async () => {
  const url = "https://course-api.com/react-useReducer-cart-project";
  let response = await fetch(url);
  let products = await response.json();

  return products;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseAmt: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount += 1;
    },
    decreaseAmt: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload && item.amount > 0
      );
      cartItem.amount -= 1;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    calculateTotal: (state) => {
      let newTotal = 0;
      let newAmt = 0;
      state.cartItems.forEach((item) => {
        newTotal += Number(item.amount) * Number(item.price);
        newAmt += Number(item.amount);
      });
      state.total = newTotal;
      state.amount = newAmt;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.cartItems = action.payload;
      let newTotal = 0;
      let newAmt = 0;
      state.cartItems.forEach((item) => {
        newTotal += Number(item.amount) * Number(item.price);
        newAmt += Number(item.amount);
      });
      state.total = newTotal;
      state.amount = newAmt;
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {
  increaseAmt,
  decreaseAmt,
  removeItem,
  calculateTotal,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
