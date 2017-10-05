import {createAction, createReducer} from 'redux-act';
import v4 from 'node-uuid';

export const toggleTodo = createAction('toggle todo');
export const addTodo = createAction('add todo');
export const editTodo = createAction('edit todo');

export const todos = createReducer({
    [toggleTodo]: (state, {todoId}) => state.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo),
    [addTodo]: (state, {title}) => [...state, {title, id: v4(), text: '', completed: false}],
    [editTodo]: (state, {editedTodo}) =>
        state.map(todo => todo.id === editedTodo.id ? editedTodo : todo)
}, []);
