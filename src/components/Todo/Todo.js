import React from 'react'
import './Todo.css'
import Checkbox from 'material-ui/Checkbox'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import IconButton from 'material-ui/IconButton'

export const Todo = ({ top, completed, title, onToggleTodo }) => (
    <div className={ top ? 'Todo Todo_top' : 'Todo' } >
        <Checkbox onCheck={onToggleTodo} checked={completed} style={{marginLeft: '8px', display: 'inline-block', maxWidth: '32px'}}/>
        {/* <input type='checkbox' className='Todo__checkbox' defaultChecked={completed} onChange={onToggleTodo} /> */}
        <p className='Todo__content' >{ title }</p>
        <IconButton tooltip={`edit "${title}"`} style={{marginRight: '16px'}} >
            <EditorModeEdit />
        </IconButton>
        {/* <button className='Todo__edit-btn' >edit</button> */}
    </div>
)
