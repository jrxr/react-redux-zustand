import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Fazer suco', 'Estudar Redux', 'Estudar Zustand'],

  reducers: {}
})

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  },
})