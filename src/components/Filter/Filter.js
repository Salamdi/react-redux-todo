import React from 'react'
import './Filter.css'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import IconButton from 'material-ui/IconButton'
import ContentClear from 'material-ui/svg-icons/content/clear'

export const Filter = ({onToggleFilter, filter, onQuery, clearSearch, history, location}) => {
    return (
        <div className='Filter' >
            <Checkbox
                label='Show done'
                className='Filter__checkbox'
                onCheck={
                    (e, isChecked) => onToggleFilter(isChecked)
                }
                checked={filter.showDone === 'true' ? true : false}
            />
            <TextField
                hintText='Search'
                value={filter.query ? filter.query : ''}
                onChange={
                    e => {
                        onQuery(e.target.value)
                    }
                }
            />
            <IconButton onClick={clearSearch} >
                <ContentClear />
            </IconButton>
        </div>
    )
}
