import { createStore, /*applyMiddleware, compose*/ } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import { loadState, saveState } from './localStorage';
import { combineReducers } from 'redux';
import categories from './categories';
import toggledCategories from './toggledCategories';
import throttle from 'lodash/throttle';

const todoApp = combineReducers({categories, toggledCategories});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    todoApp,
    loadState(),
    // composeEnhancers(applyMiddleware(thunkMiddleware))
);

store.subscribe(throttle(() => saveState({categories: store.getState().categories.present}), 1000));

export default store
