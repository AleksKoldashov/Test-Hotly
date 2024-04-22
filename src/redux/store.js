import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slicer'

export default configureStore({
  reducer: {
    stateManeger: counterReducer,
  },
})