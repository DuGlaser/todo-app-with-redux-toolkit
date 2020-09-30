import { createEntityAdapter, EntityState } from '@reduxjs/toolkit';

export interface Todo {
  id: string;
  title: string;
  discription: string;
  isDone: boolean;
}

export interface TodoState extends EntityState<Todo> {}

export const todoAdapter = createEntityAdapter<Todo>({});

export const todoInitialState: TodoState = todoAdapter.getInitialState({});
