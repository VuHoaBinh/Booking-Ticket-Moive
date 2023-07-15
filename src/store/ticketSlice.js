import { createSlice } from '@reduxjs/toolkit'

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: [],
  reducers: {
    confirm(state, action) {
      state.push(action.payload)
    },
  },
})
const { actions, reducer } = ticketSlice
export const { confirm } = actions
export default reducer
