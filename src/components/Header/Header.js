import React from 'react'
import './Header.css'
import { Filter } from '../Filter'
import { Add } from '../Add'
import AppBar from 'material-ui/AppBar'
import LinearProgress from 'material-ui/LinearProgress'

export const Header = ({progress, onCategoryAdd, onTodoAdd, location, onToggleFilter, filter, onQuery, clearSearch, history}) => {
    return (
        <header className='Header' >
            <AppBar title='To-Do List' showMenuIconButton={false} />
            <div className='container'>
                {
                    location.pathname !== '/'
                        ?<div >
                            <Filter onToggleFilter={onToggleFilter} filter={filter} onQuery={onQuery} clearSearch={clearSearch} />
                            <br />
                            <LinearProgress mode='determinate' value={progress} style={{height: '16px', borderRadius: '4px'}}/>
                            <br />
                        </div>
                        : null
                }
                <div className='HeaderRow' >
                    <Add placeholder='Enter category title' onItemAdd={onCategoryAdd} />
                    {
                        location.pathname !== '/'
                            ? <Add placeholder='Enter todo title' onItemAdd={onTodoAdd} />
                            : null
                    }
                </div>
            </div>
        </header>
    )
}
