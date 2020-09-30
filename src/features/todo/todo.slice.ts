import { createSlice } from '@reduxjs/toolkit';
import { todoInitialState, todoAdapter } from './todo.entity';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: todoInitialState,
  reducers: {
    todoAddOne: todoAdapter.addOne,
    todoAddMany: todoAdapter.addMany,
    todoSetAll: todoAdapter.setAll,
    todoUpdateOne: todoAdapter.updateOne,
  },
});

export const {
  todoAddOne,
  todoAddMany,
  todoSetAll,
  todoUpdateOne,
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
