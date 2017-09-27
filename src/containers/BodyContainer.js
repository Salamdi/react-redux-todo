import { connect } from 'react-redux'
import { Body } from '../components/Body'
import {
    toggleTodo
} from '../store/actions'
import { parse } from 'query-string'

const matchStateToProps = (state, ownProps) => ({
    todos: filterByCompletion(
        filterByQuery(
            getCategoryTodos(
                state.categories,
                ownProps.match.params.catId
            ),
            parse(ownProps.location.search).query
        ),
        parse(ownProps.location.search).showDone === 'true' ? true : false
    )
})

const matchDispatchToProps = (dispatch, ownProps) => ({
    onToggleTodo: id => dispatch(toggleTodo(ownProps.match.params.catId, id))
})

const getCategoryTodos = (categories, id) => {
    const catFound = categories.find(cat => cat.id === id)
    return catFound ? catFound.todos : null
}

const filterByCompletion = (todos, showDone) =>todos && showDone ? todos.filter(todo => todo.completed) : todos
const filterByQuery = (todos, query) => todos && query ? todos.filter(todo => new RegExp(query, 'i').test(todo.title + todo.text)) : todos



export default connect(matchStateToProps, matchDispatchToProps)(Body)