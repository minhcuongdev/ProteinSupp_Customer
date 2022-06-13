import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  addresses: [],
  addressDefault: {}
}

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddresses: (state, actions) => {
      const addressDefault = (actions.payload.filter(address => address.addressDefault === true))[0]
      state.addressDefault = addressDefault
      state.addresses = actions.payload
    },
    addAddress: (state, actions) => {
      state.addresses = [...state.addresses, actions.payload]
      const addressDefault = state.addresses.filter(address => address.addressDefault === true)[0]
      state.addressDefault = addressDefault
    },
    deleteAddress: (state, actions) => {
      state.addresses = state.addresses.filter(address => address._id !== actions.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { setAddresses, addAddress, deleteAddress } = addressSlice.actions

const addressReducer = addressSlice.reducer

export default addressReducer