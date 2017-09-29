import React from 'react'
import './Header.css'
import { Filter } from '../Filter'
import { Add } from '../Add'
import AppBar from 'material-ui/AppBar'
import ProgressContainer from '../../containers/ProgressContainer'
import IconButton from 'material-ui/IconButton'
import Undo from 'material-ui/svg-icons/content/undo'
import Redo from 'material-ui/svg-icons/content/redo'
import Save from 'material-ui/svg-icons/content/save'

export const Header = ({
    onCategoryAdd,
    onTodoAdd,
    location,
    onToggleFilter,
    filter,
    onQuery,
    clearSearch,
    history,
    match,
    undoDisabled,
    redoDisabled,
    undo,
    redo,
    save
}) => {
    const iconStyle = {color: 'white'}
    return (
        <header className='Header' >
            <AppBar
                title='To-Do List'
                showMenuIconButton={false}
                iconElementRight={
                    <div>
                        <IconButton iconStyle={iconStyle} disabled={undoDisabled} onClick={undo} >
                            <Undo />
                        </IconButton>
                        <IconButton iconStyle={iconStyle} disabled={redoDisabled} onClick={redo} >
                            <Redo />
                        </IconButton>
                        <IconButton iconStyle={iconStyle} disabled={redoDisabled && undoDisabled} onClick={save} >
                            <Save />
                        </IconButton>
                    </div>
                }
            />
            <div className='container'>
                {
                    match.params.catId && !match.params.todoId
                        ? <div >
                            <Filter 
                                onToggleFilter={onToggleFilter}
                                filter={filter}
                                onQuery={onQuery}
                                clearSearch={clearSearch}
                                history={history}
                                location={location}
                                match={match}
                            />
                            <br />
                            <ProgressContainer catId={match.params.catId} />
                            <br />
                        </div>
                        : null
                }
                <div className='HeaderRow' >
                    {
                        match.isExact && !match.params.todoId
                            ? <Add placeholder='Enter category title' onItemAdd={onCategoryAdd} />
                            : null
                    }
                    {
                        match.params.catId && !match.params.todoId
                            ? <Add placeholder='Enter todo title' onItemAdd={onTodoAdd} />
                            : null
                    }
                </div>
            </div>
        </header>
    )
}

// match.params.catId && !match.params.todoId