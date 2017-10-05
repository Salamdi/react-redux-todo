import { createAction, createReducer } from 'redux-act';
import {
    toggleTodo,
    addTodo,
    editTodo,
    todos
} from './todos';
import v4 from 'node-uuid'
import undoable, { distinctState } from 'redux-undo';
import { loadState } from './localStorage';

export const toggleCategory = createAction('show/hide subcategories');
export const addCategory = createAction('add a new category');
export const deleteCategory = createAction('delete a category and all subcategories');
export const editCategory = createAction('change category name');

const categories = createReducer({
    [toggleCategory]: (state, {id}) => state.map(cat => cat.id === id ? ({...cat, toggled: !cat.toggled}) : cat),
    [addCategory]: (state, {id, title}) =>
        [
            ...state,
            {
                category: title,
                id: v4(),
                parentId: id || null,
                todos: []
            }
        ],
    [deleteCategory]: (state, {id}) =>
        filterCategories(state, id),
    [editCategory]: (state, {id, title}) =>
        state.map(cat => cat.id === id ? {...cat, category: title} : cat),
    [toggleTodo]: (state, {catId, todoId}) => {
        return state.map(cat => cat.id === catId ? {
            ...cat,
            todos: todos(cat.todos, {type: `${toggleTodo}`, payload: {todoId}})
        } : cat)
    },
    [addTodo]: (state, {title, catId}) =>
        state.map(cat => cat.id === catId ? {
            ...cat,
            todos: todos(cat.todos, {type: `${addTodo}`, payload: {title}})
        } : cat),
    [editTodo]: (state, {catId, editedTodo}) =>
        state.map(cat => cat.id === catId ? {
            ...cat,
            todos: todos(cat.todos, {type: `${editTodo}`, payload: {editedTodo}})
        } : cat)
}, loadState() ? loadState().categories : []);

const filterCategories = (cats, delId) => {
    const delIds = getIdsToDelete(cats, delId);
    return cats.filter(cat => !delIds.includes(cat.id))
};

const isSelf = (cat, delId) => cat.id === delId;

const isChild = (cat, delId) => cat.parentId === delId;

const getIdsToDelete = (cats, delId) => {
    let catsToDelete = [];
    cats.forEach(cat => {
        if (isSelf(cat, delId)) {
            catsToDelete.push(cat.id)
        } else if (isChild(cat, delId)) {
            catsToDelete = catsToDelete.concat(getIdsToDelete(cats, cat.id))
        }
    });
    return catsToDelete
};

export default undoable(
    categories,
    {
        filter: distinctState()
    }
)