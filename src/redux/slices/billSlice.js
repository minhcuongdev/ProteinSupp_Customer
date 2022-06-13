import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bills: [],
  bill: {},
  billOrders: [],
}

export const billSlice = createSlice({
  name: 'bills',
  initialState,
  reducers: {
    setBills: (state, actions) => {
      state.bills = actions.payload
    },
    getBillById: (state, actions) => {
      const billId = actions.payload.billId;
      const billFilter = state.bills.filter(bill => bill._id === billId)
      state.bill = billFilter[0]
    },
    setOneBill: (state, actions) => {
      state.bills.push(actions.payload)
    },
    setBillOrders: (state, actions) => {
      state.billOrders = actions.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setBills, getBillById, setOneBill, setBillOrders } = billSlice.actions

const billSliceReducer = billSlice.reducer

export default billSliceReducer