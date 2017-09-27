import React from 'react'
import './Header.css'
import { Filter } from '../Filter'
import { Add } from '../Add'
import AppBar from 'material-ui/AppBar'
import ProgressContainer from '../../containers/ProgressContainer'

export const Header = ({
    onCategoryAdd,
    onTodoAdd,
    location,
    onToggleFilter,
    filter,
    onQuery,
    clearSearch,
    history,
    match
}) => {
    console.log(match)
    return (
        <header className='Header' >
            <AppBar title='To-Do List' showMenuIconButton={false} />
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