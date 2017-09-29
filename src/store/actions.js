import { v4 } from 'node-uuid'

/* CATEGORIES */

export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY'

export const toggleCategory = id => ({
    type: TOGGLE_CATEGORY,
    id
})

export const ADD_CATEGORY = 'ADD_CATEGORY'

export const addCategory = (parentId, title) => ({
    type: ADD_CATEGORY,
    title,
    parentId,
    id: v4()
})

export const DELETE_CATEGORY = 'DELETE_CATEGORY'

export const deleteCategory = id => ({
    type: DELETE_CATEGORY,
    id
})

export const EDIT_CATEGORY = 'EDIT_CATEGORY'

export const editCategory = (id, title) => ({
    type: EDIT_CATEGORY,
    id,
    title
})

/* CATEGORIES */



/* TODOS */

export const TOGGLE_TODO = 'TOGGLE_TODO'

export const toggleTodo = (catId, todoId) => ({
    type: TOGGLE_TODO,
    catId,
    todoId
})

export const ADD_TODO = 'ADD_TODO'

export const addTodo = (title, catId) => ({
    type: ADD_TODO,
    title,
    id: v4(),
    catId
})

export const EDIT_TODO = 'EDIT_TODO'

export const editTodo = (catId, newTodo) => ({
    type: EDIT_TODO,
    catId,
    newTodo
})

/* TODOS */

/* HISTORY */

export const UNDO = 'UNDO'

export const undo = () => ({
    type: UNDO
})

export const REDO = 'REDO'

export const redo = () => ({
    type: REDO
})

export const SAVE = 'SAVE'

export const save = () => ({
    type: SAVE
})

/* HISTORY */
