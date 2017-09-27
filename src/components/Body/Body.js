import React from 'react'
import { TodoList } from '../TodoList'
import EditTodo from '../../containers/EditTodo/EditTodo'
import { parse } from 'query-string'

export const Body = ({match, todos, onToggleTodo, history, location}) => {
    return (
        <div>
            {
                match.params.todoId
                    ? <EditTodo match={match} history={history}/>
                    : <TodoList todos={todos} onToggleTodo={onToggleTodo} url={match.url} />
            }
        </div>
    )
}
