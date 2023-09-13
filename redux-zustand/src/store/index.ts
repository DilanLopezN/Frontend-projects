import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['fazer café', 'estudar redux'],
  reducers: {}
})
export const store  = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})