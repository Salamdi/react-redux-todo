import './TodoList.css'
import React, { Component } from 'react'
import { Todo } from '../Todo'
import { Redirect } from 'react-router-dom'

export class TodoList extends Component {
    componentDidMount() {
        this.props.onCategorySelect()
    }
    render() {
        
        return this.props.todos
            ? (
                <div className='TodoList' >
                    { this.props.todos.map(
                        (todo, index) =>
                        <Todo
                            top={ index === 0 }
                            key={ todo.id }
                            {...todo}
                            onToggleTodo={() => this.props.onToggleTodo(todo.id)}
                            url={this.props.url}
                        />
                    ) }
                </div>
            )
            : (
                <Redirect to='/' />
            )
    }
}
