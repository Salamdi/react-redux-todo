import React from 'react'
import './EditTodo.css'

export const EditTodo = ({ completed, title, text, id }) => (
    <div className='EditTodo' >
        <div className='EditTodoRow EditTodoRow_content-pos-left' >
            <button className='EditTodo__btn EditTodo__save-btn'>Save changes</button>
            <button className='EditTodo__btn EditTodo__cancel-btn'>Cancel</button>
        </div>
        <div className='EditTodoRow' >
            <input className='EditTodo__title-input' defaultValue={title} />
        </div>
        <div className='EditTodoRow' >
            <label htmlFor='done'>
                <input className='EditTodo__checkbox' type='checkbox' defaultChecked={completed} id='done' />
                done
            </label>
        </div>
        <textarea className='EditTodo__text' defaultValue={text} />
    </div>
)