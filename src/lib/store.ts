import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './slice/taskSlice'

export const store = configureStore({
  reducer: {
    task: taskSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// https://redux-toolkit.js.org/usage/nextjs