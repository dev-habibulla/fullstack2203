import { createSlice } from '@reduxjs/toolkit'

export const userInfoSlice = createSlice({
  name: 'loginUser',
  initialState: {
    value: localStorage.getItem("user")? JSON.parse( localStorage.getItem("user")): null,
  },
  reducers: {
    logedUser: (state, action) => {
      state.value = action.payload
    },
  }
})

export const { logedUser } = userInfoSlice.actions

export default userInfoSlice.reducer