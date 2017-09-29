import React from 'react'
import { TodoList } from '../TodoList'
import EditTodo from '../../containers/EditTodo/EditTodo'
import { Redirect } from 'react-router-dom'

export const Body = ({match, todos, onToggleTodo, history, location}) => {
    return (
        <div>
            {
                match.params.todoId
                    ? todos
                        ? <EditTodo match={match} history={history}/>
                        : <Redirect to='/' />
                    : <TodoList todos={todos} onToggleTodo={onToggleTodo} url={match.url} />
            }
        </div>
    )
}
