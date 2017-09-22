import { combineReducers } from 'redux'
import {
    TOGGLE_CATEGORY,
    SELECT_CATEGORY,
    TOGGLE_TODO,
    ADD_CATEGORY,
    ADD_TODO,
    TOGGLE_FILTER,
    DELETE_CATEGORY,
    EDIT_CATEGORY,
    SEARCH_TODO,
    EDIT_TODO
} from './actions'
import { v4 } from 'node-uuid'

const categories = ( state = [], action ) => {
    switch ( action.type ) {
        case TOGGLE_CATEGORY:
            return state.map(cat => cat.id === action.id ? ({...cat, toggled: !cat.toggled}) : cat)
        case SELECT_CATEGORY:
            return state.map(cat => cat.id === action.id ? {...cat, selected: true} : {...cat, selected: false})
        case TOGGLE_TODO:
            return state.map(cat => cat.id === action.catId ? {...cat, todos: todos(cat.todos, action)} : cat)
        case ADD_CATEGORY:
            return [
                ...state,
                {
                    category: action.title,
                    id: v4(),
                    parentId: action.parentId,
                    todos: []
                }
            ]
        case ADD_TODO:
            return state.map(cat => cat.selected ? {...cat, todos: todos(cat.todos, action)} : cat)
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

const filter = ( state = {showDone: false, query: ''}, action ) => {
    switch (action.type) {
        case TOGGLE_FILTER:
            return {...state, showDone: action.isChecked}
        case SEARCH_TODO:
            return {...state, query: action.query}
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
                    id: v4(),
                    title: action.title,
                    text: '',
                    completed: false
                }
            ]
        case TOGGLE_FILTER:
            return action.isChecked ? state.filter(todo => todo.completed) : state
        case EDIT_TODO:
            return state.map(todo => todo.id === action.newTodo.id ? action.newTodo : todo)
        default:
            return state
    }
}

export const todoApp = combineReducers({ categories, filter })

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
