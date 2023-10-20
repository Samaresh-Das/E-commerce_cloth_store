// cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        if (existingItem.quantity <= 4) {
          existingItem.quantity += 1;
        }
        // existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.find((cartItem) => cartItem.id === action.payload);
      if (item) {
        if (item.quantity < 4) {
          item.quantity += 1;
        }
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.find((cartItem) => cartItem.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Remove item if quantity is reduced to 0
          const index = state.findIndex(
            (cartItem) => cartItem.id === action.payload
          );
          if (index !== -1) {
            state.splice(index, 1);
          }
        }
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      const index = state.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.length = 0; // Clears the cart array
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
