import { createSlice } from "@reduxjs/toolkit";
import { useMemo } from "react";

const initialState = {
  productInCart: [],
  numberProduct: 0,
  totalMoney: 0,
};

const calculatorTotalMoney =  (state) => {
  state.totalMoney = state.productInCart.reduce((preValue, currValue) => {
    if(currValue.checked) {
      return preValue + currValue.quality * currValue.price;
    } else return preValue
  }, 0);
}


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, actions) => {
      const product = actions.payload;

      const findProduct = state.productInCart.filter(
        (p) => p._id === product._id
      );

      if (findProduct.length > 0) {
        state.productInCart.map((p) => {
          if (p._id === product._id) {
            p.quality += product.quality;
          }
        });
      } else {
        state.productInCart = [...state.productInCart, product];
        state.numberProduct += 1;
      }
    },
    checkedProduct: (state, actions) => {
      state.productInCart.map((product) => {
        if (product._id === actions.payload.idProduct)
          product.checked = !product.checked;
      });

      calculatorTotalMoney(state)
    },
    removeProduct: (state, actions) => {
      state.productInCart = state.productInCart.filter(
        (product) => product._id !== actions.payload.idProduct
      );
      state.numberProduct -= 1;
    },
    increaseQualityProduct: (state, actions) => {
      state.productInCart.map((product) => {
        if (product._id === actions.payload.idProduct) {
          product.quality += 1;

          if(product.checked) calculatorTotalMoney(state)
        } 
      });
    },
    decreaseQualityProduct: (state, actions) => {
      state.productInCart.map((product) => {
        if (product._id === actions.payload.idProduct) {
          product.quality -= 1;

          if(product.checked) calculatorTotalMoney(state)
        } 
      });
    },
    clearCart: (state) => {
      state.productInCart = []
      state.numberProduct = 0
      state.totalMoney= 0
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  addProductToCart,
  checkedProduct,
  removeProduct,
  increaseQualityProduct,
  decreaseQualityProduct,
  clearCart
} = cartSlice.actions;

const cartReducer = cartSlice.reducer;

export default cartReducer;
