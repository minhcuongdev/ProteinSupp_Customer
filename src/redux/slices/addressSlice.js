import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  address: ""
}

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, actions) => {
      state.account = actions.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setAddress } = addressSlice.actions

const addressReducer = addressSlice.reducer

export default addressReducer