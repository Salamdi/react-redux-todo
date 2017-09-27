import React from 'react'
import './Todo.css'
import Checkbox from 'material-ui/Checkbox'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import IconButton from 'material-ui/IconButton'
import { Link } from 'react-router-dom'

export const Todo = ({ top, completed, title, onToggleTodo, id, url }) => {
    return (
        <div className={ top ? 'Todo Todo_top' : 'Todo' } >
            <Checkbox onCheck={onToggleTodo} checked={completed} style={{marginLeft: '8px', display: 'inline-block', maxWidth: '32px'}}/>
            <p className='Todo__content' >{ title }</p>
            <Link to={`${url}/${id}`} >
                <IconButton tooltip={`edit "${title}"`} style={{marginRight: '16px'}} >
                    <EditorModeEdit />
                </IconButton>
            </Link>
        </div>
    )
}
