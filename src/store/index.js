import { createStore, applyMiddleware, compose } from 'redux'
import { todoApp } from './reducers'
import thunkMiddleware from 'redux-thunk'
import throttle from 'lodash/throttle'
import { saveState, loadState } from './localStorage'

/* export const state = {
    filter: {
        showDone: false,
        query: ''
    },
    categories: [
        {
            category: 'Category 1',
            id: 0,
            parentId: null,
            todos: [
                {
                    id: Math.random(),
                    title: `Todo Item #1`,
                    text: `description`,
                    completed: true
                },
                {
                    id: Math.random(),
                    title: `Todo Item #2`,
                    text: `description`,
                    completed: true
                },
                {
                    id: Math.random(),
                    title: `Todo Item #3`,
                    text: `description`,
                    completed: true
                },
                {
                    id: Math.random(),
                    title: `Todo Item #4`,
                    text: `description`,
                    completed: true
                }
            ]
        },
        {
            category: 'Category 2',
            id: 1,
            parentId: null,
            todos: [
                {
                    id: Math.random(),
                    title: `Todo Item #5`,
                    text: `description`,
                    completed: false
                },
                {
                    id: Math.random(),
                    title: `Todo Item #6`,
                    text: `description`,
                    completed: true
                },
                {
                    id: Math.random(),
                    title: `Todo Item #7`,
                    text: `description`,
                    completed: false
                },
                {
                    id: Math.random(),
                    title: `Todo Item #8`,
                    text: `description`,
                    completed: true
                }
            ]
        },
        {
            category: 'Category 3',
            id: 2,
            parentId: null,
            todos: [
                {
                    id: Math.random(),
                    title: `Todo Item #9`,
                    text: `description`,
                    completed: true
                },
                {
                    id: Math.random(),
                    title: `Todo Item #10`,
                    text: `description`,
                    completed: true
                }
            ]
        },
        {
            category: 'Category 3 1',
            id: 3,
            parentId: 2,
            todos: [
                {
                    id: Math.random(),
                    title: `Todo Item #11`,
                    text: `description`,
                    completed: true
                },
                {
                    id: Math.random(),
                    title: `Todo Item #12`,
                    text: `description`,
                    completed: true
                }
            ]
        },
        {
            category: 'Category 3 2',
            id: 4,
            parentId: 2,
            todos: [
                {
                    id: Math.random(),
                    title: `Todo Item #13`,
                    text: `description`,
                    completed: true
                },
                {
                    id: Math.random(),
                    title: `Todo Item #14`,
                    text: `description`,
                    completed: true
                }
            ]
        },
        {
            category: 'Category 3 3',
            id: 5,
            parentId: 2,
            todos: [
                {
                    id: Math.random(),
                    title: `Todo Item #15`,
                    text: `description`,
                    completed: true
                },
                {
                    id: Math.random(),
                    title: `Todo Item #16`,
                    text: `description`,
                    completed: true
                }
            ]
        },
        {
            category: 'Category 3 1 1',
            id: 6,
            parentId: 5,
            todos: [
                {
                    id: Math.random(),
                    title: `Todo Item #17`,
                    text: `description`,
                    completed: true
                },
                {
                    id: Math.random(),
                    title: `Todo Item #18`,
                    text: `description`,
                    completed: true
                }
            ]
        },
        {
            category: 'Category 3 1 2',
            id: 7,
            parentId: 5,
            todos: [
                {
                    id: Math.random(),
                    title: `Todo Item #19`,
                    text: `description`,
                    completed: true
                },
                {
                    id: Math.random(),
                    title: `Todo Item #20`,
                    text: `description`,
                    completed: true
                }
            ]
        },
        {
            category: 'Category 3 1 3',
            id: 8,
            parentId: 5,
            todos: [
                {
                    id: Math.random(),
                    title: `Todo Item #21`,
                    text: `description`,
                    completed: true
                },
                {
                    id: Math.random(),
                    title: `Todo Item #22`,
                    text: `description`,
                    completed: true
                }
            ]
        },
        {
            category: 'Category 4',
            id: 9,
            parentId: null,
            todos: [
                {
                    id: Math.random(),
                    title: `Todo Item #21`,
                    text: `description`,
                    completed: false
                },
                {
                    id: Math.random(),
                    title: `Todo Item #22`,
                    text: `description`,
                    completed: true
                }
            ]
        }
    ]
} */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
composeEnhancers(applyMiddleware(thunkMiddleware))
const store = createStore(todoApp, loadState(), composeEnhancers(applyMiddleware(thunkMiddleware)))
store.subscribe(throttle(() => saveState({categories: store.getState().categories}), 1000))

export default store
