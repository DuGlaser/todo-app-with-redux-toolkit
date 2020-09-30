import { todoAdapter } from './todo.entity';
import { RootState } from '../../app/store';

const todoSelector = todoAdapter.getSelectors((state: RootState) => state.todo);

export const selectAllTodos = todoSelector.selectAll;
