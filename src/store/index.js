import { configureStore } from '@reduxjs/toolkit'

import ticketSlice from './ticketSlice'
const store = configureStore({
  reducer: {
    tickets: ticketSlice,
  },
})

export default store
