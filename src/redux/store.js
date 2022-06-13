import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './slices/accountSlice'
import productReducer from './slices/productSlice'
import snackBarReducer from './slices/snackBarSlice'
import cartReducer from './slices/cartSlice'
import billSliceReducer from './slices/billSlice'
import addressReducer from './slices/addressSlice'

export const store = configureStore({
  reducer: {
    account: accountReducer,
    product: productReducer,
    snackBar: snackBarReducer,
    cart: cartReducer,
    bill: billSliceReducer,
    address: addressReducer
  },
})