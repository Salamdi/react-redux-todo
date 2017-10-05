import { connect } from 'react-redux'
import { Body } from '../components/Body'
import {
    toggleTodo
} from '../store/todos'
import { parse } from 'query-string'

const mapStateToProps = (state, ownProps) => ({
    todos: filterByCompletion(
        filterByQuery(
            getCategoryTodos(
                state.categories.present,
                ownProps.match.params.catId
            ),
            parse(ownProps.location.search).query
        ),
        parse(ownProps.location.search).showDone === 'true'
    )
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onToggleTodo: todoId => dispatch(toggleTodo({catId: ownProps.match.params.catId, todoId}))
});

const getCategoryTodos = (categories, id) => {
    const catFound = categories.find(cat => cat.id === id);
    return catFound ? catFound.todos : null
};

const filterByCompletion = (todos, showDone) =>
    todos && showDone
        ? todos
            .filter(todo => todo.completed)
        : todos;

const filterByQuery = (todos, query) =>
    todos && query
        ? todos
            .filter(todo => new RegExp(query, 'i')
                .test(todo.title + todo.text))
        : todos;



export default connect(mapStateToProps, mapDispatchToProps)(Body);
