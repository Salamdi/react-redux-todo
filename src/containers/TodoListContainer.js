import { connect } from 'react-redux'
import { TodoList } from '../components/TodoList'
import {
    selectCategory,
    toggleTodo
} from '../store/actions'

const matchStateToProps = (state, ownProps) => ({
    todos: filterByCompletion(
        filterByQuery(
            getCategoryTodos(
                state.categories,
                parseInt(ownProps.match.params.catId, 10)
            ),
            state.filter.query
        ),
        state.filter.showDone
    ) /* state.filter.showDone
        ? getCategoryTodos(state.categories, parseInt(ownProps.match.params.catId, 10)).filter(todo => todo.completed)
        : getCategoryTodos(state.categories, parseInt(ownProps.match.params.catId, 10)) */
})

const matchDispatchToProps = (dispatch, ownProps) => ({
    onCategorySelect: () => dispatch(selectCategory(parseInt(ownProps.match.params.catId, 10))),
    onToggleTodo: id => dispatch(toggleTodo(parseInt(ownProps.match.params.catId, 10), id))
})

const getCategoryTodos = (categories, id) => {
    const catFound = categories.find(cat => cat.id === id)
    return catFound ? catFound.todos : null
}

const filterByCompletion = (todos, showDone) => showDone ? todos.filter(todo => todo.completed) : todos
const filterByQuery = (todos, query) => query ? todos.filter(todo => new RegExp(query, 'i').test(todo.title + todo.text)) : todos



export default connect(matchStateToProps, matchDispatchToProps)(TodoList)