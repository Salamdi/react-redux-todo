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
                ownProps.match.params.catId
            ),
            state.filter.query
        ),
        state.filter.showDone
    ),
    url: ownProps.match.url
})

const matchDispatchToProps = (dispatch, ownProps) => ({
    onCategorySelect: () => dispatch(selectCategory(ownProps.match.params.catId)),
    onToggleTodo: id => dispatch(toggleTodo(ownProps.match.params.catId, id))
})

const getCategoryTodos = (categories, id) => {
    const catFound = categories.find(cat => cat.id === id)
    return catFound ? catFound.todos : null
}

const filterByCompletion = (todos, showDone) =>todos && showDone ? todos.filter(todo => todo.completed) : todos
const filterByQuery = (todos, query) => todos && query ? todos.filter(todo => new RegExp(query, 'i').test(todo.title + todo.text)) : todos



export default connect(matchStateToProps, matchDispatchToProps)(TodoList)