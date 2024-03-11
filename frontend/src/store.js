import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userInfoSlice'

export default configureStore({
  reducer: {
    logedUser: userReducer,

  }
})