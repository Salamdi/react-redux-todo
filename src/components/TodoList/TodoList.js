import './TodoList.css'
import React from 'react'
import { Todo } from '../Todo'
import { Redirect } from 'react-router-dom'

export const TodoList = ({todos, onToggleTodo, url}) => {
    return (
        todos
            ?<div className='TodoList' >
                { todos.map(
                    (todo, index) =>
                    <Todo
                        top={ index === 0 }
                        key={ todo.id }
                        {...todo}
                        onToggleTodo={() => onToggleTodo(todo.id)}
                        url={url}
                    />
                ) }
            </div>
            : <Redirect to='/' />
    )
}
