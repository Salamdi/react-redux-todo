import { connect } from 'react-redux'
import { Header } from '../components/Header'
import {
    addCategory,
    addTodo,
    toggleFilter,
    searchTodo
} from '../store/actions'

const matchPropsToState = (state, ownProps) => ({
    progress: calcProgress(state.categories),
    ...ownProps,
    filter: state.filter
})

const matchDispatchToProps = dispatch => ({
    onCategoryAdd: newCategoryTitle => dispatch(addCategory(null /* no parent */, newCategoryTitle)),
    onTodoAdd: newTodoTitle => dispatch(addTodo(newTodoTitle)),
    onToggleFilter: isChecked => dispatch(toggleFilter(isChecked)),
    onQuery: query => dispatch(searchTodo(query)),
    clearSearch: () => dispatch(searchTodo(''))
})

const calcProgress = categories => {
    const selectedCat = categories.find(cat => cat.selected)
    return selectedCat && categories.find(cat => cat.selected).todos.reduce((prev, curr, currIndex, arr) => curr.completed ? (prev + (100 / arr.length)) : prev, 0)
}

export default connect(matchPropsToState, matchDispatchToProps)(Header)