import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cart: [],
  total_items: 0,
  total_amount: 0,
  shipping_fee: 500,
};

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem("comfy-sloth-cart");
  return JSON.parse(cart);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage() || defaultState,
  reducers: {
    addItem: (state, action) => {
      const cartItem = action.payload;
      const selectedItem = state.cart.find((item) => {
        return item.id === cartItem.id;
      });
      if (selectedItem) {
        selectedItem.amount += cartItem.amount;
        if (selectedItem.max !== cartItem.max) {
          selectedItem.max = cartItem.max;
        }
        if (selectedItem.amount > selectedItem.max) {
          selectedItem.amount = selectedItem.max;
          toast.error(`Sorry, we have only ${selectedItem.max} items in stock`);
        }
      } else {
        state.cart.push(cartItem);
      }
      cartSlice.caseReducers.calculateTotals(state);
    },

    removeItem: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((item) => {
        return item.id !== id;
      });
      cartSlice.caseReducers.calculateTotals(state);
    },

    editItem: (state, action) => {
      const { id, fnName } = action.payload;
      const selectedItem = state.cart.find((item) => {
        return item.id === id;
      });
      if (fnName === "inc") {
        selectedItem.amount++;
        if (selectedItem.amount > selectedItem.max) {
          selectedItem.amount = selectedItem.max;
          toast.error(`Sorry, we have only ${selectedItem.max} items in stock`);
        }
      } else if (fnName === "dec") {
        selectedItem.amount--;
        if (selectedItem.amount < 1) {
          selectedItem.amount = 1;
        }
      }
      cartSlice.caseReducers.calculateTotals(state);
    },

    clearCart: (state) => {
      localStorage.setItem("comfy-sloth-cart", JSON.stringify(defaultState));
      return defaultState;
    },

    calculateTotals: (state) => {
      const { totalItems, totalAmount } = state.cart.reduce(
        (total, item) => {
          const { amount, price } = item;
          total.totalItems += amount;
          total.totalAmount += price * amount;
          return total;
        },
        { totalItems: 0, totalAmount: 0 }
      );
      state.total_items = totalItems;
      state.total_amount = totalAmount;
      localStorage.setItem("comfy-sloth-cart", JSON.stringify(state));
    },
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions;
