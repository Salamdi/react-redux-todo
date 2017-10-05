import {createAction, createReducer} from 'redux-act';

export const showSubcategories = createAction('show subcategories');
export const hideSubcategories = createAction('hide subcategories');

export default createReducer({
    [showSubcategories]: (state, {id}) => ({...state, [id]: true}),
    [hideSubcategories]: (state, {id}) => ({...state, [id]: false})
}, {});
