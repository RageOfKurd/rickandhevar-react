import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './redux/themeSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
  })