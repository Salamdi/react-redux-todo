/* CATEGORIES */

export const TOGGLE_CATEGORY = 'TOGGLE_CATEGORY'

export const toggleCategory = id => ({
    type: TOGGLE_CATEGORY,
    id
})

export const SELECT_CATEGORY = 'SELECT_CATEGORY'

export const selectCategory = id => ({
    type: SELECT_CATEGORY,
    id
})

export const ADD_CATEGORY = 'ADD_CATEGORY'

export const addCategory = (parentId, title) => ({
    type: ADD_CATEGORY,
    title,
    parentId
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

export const addTodo = title => ({
    type: ADD_TODO,
    title
})

export const EDIT_TODO = 'EDIT_TODO'

export const editTodo = (catId, newTodo) => ({
    type: EDIT_TODO,
    catId,
    newTodo
})

/* TODOS */

/* FILTER */

export const TOGGLE_FILTER = 'TOGGLE_FILTER'

export const toggleFilter = isChecked => ({
    type: TOGGLE_FILTER,
    isChecked
})

export const SEARCH_TODO = 'SEARCH_TODO'

export const searchTodo = query => ({
    type: SEARCH_TODO,
    query
})

/* FILTER */
