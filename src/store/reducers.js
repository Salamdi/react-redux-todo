import { combineReducers } from 'redux'
import {
    TOGGLE_CATEGORY,
    TOGGLE_TODO,
    ADD_CATEGORY,
    ADD_TODO,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    EDIT_TODO
} from './actions'

const categories = ( state = [], action ) => {
    switch ( action.type ) {
        case TOGGLE_CATEGORY:
            return state.map(cat => cat.id === action.id ? ({...cat, toggled: !cat.toggled}) : cat)
        case TOGGLE_TODO:
            return state.map(cat => cat.id === action.catId ? {...cat, todos: todos(cat.todos, action)} : cat)
        case ADD_CATEGORY:
            return [
                ...state,
                {
                    category: action.title,
                    id: action.id,
                    parentId: action.parentId,
                    todos: []
                }
            ]
        case ADD_TODO:
            return state.map(cat => cat.id === action.catId ? {...cat, todos: todos(cat.todos, action)} : cat)
        case DELETE_CATEGORY:
            return filterCategories(state, action.id)
        case EDIT_CATEGORY:
            return state.map(cat => cat.id === action.id ? {...cat, category: action.title} : cat)
        case EDIT_TODO:
            return state.map(cat => cat.id === action.catId ? {...cat, todos: todos(cat.todos, action)} : cat)
        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case TOGGLE_TODO:
            return state.map(todo => action.todoId === todo.id ? {...todo, completed: !todo.completed} : todo)
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    text: '',
                    completed: false
                }
            ]
        case EDIT_TODO:
            return state.map(todo => todo.id === action.newTodo.id ? action.newTodo : todo)
        default:
            return state
    }
}

export const todoApp = combineReducers({ categories })

const isSelf = (cat, delId) => cat.id === delId ? true : false

const isChild = (cat, delId) => cat.parentId === delId ? true : false

const getIdsToDelete = (cats, delId) => {
    let catsToDelete = []
    cats.forEach(cat => {
        if (isSelf(cat, delId)) {
            catsToDelete.push(cat.id)
        } else if (isChild(cat, delId)) {
            catsToDelete = catsToDelete.concat(getIdsToDelete(cats, cat.id))
        }
    })
    return catsToDelete
}

const filterCategories = (cats, delId) => {
    const delIds = getIdsToDelete(cats, delId)
    return cats.filter(cat => !delIds.includes(cat.id))
}
