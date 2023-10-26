import { configureStore } from '@reduxjs/toolkit'
import formSlice from './formSlice'
import paginadorSlice from './paginadorSlice'

export const store = configureStore({
  reducer: {
    form: formSlice,
    paginador: paginadorSlice
  },
})