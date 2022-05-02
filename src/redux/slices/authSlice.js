import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isSignIn: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isSignIn = true
    },
    logout: (state) => {
      state.isSignIn = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout} = authSlice.actions

const authReducer = authSlice.reducer

export default authReducer