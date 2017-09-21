import React from 'react'
import './Filter.css'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'

export const Filter = ({onToggleFilter, filter, onQuery}) => {
    return (
        <div className='Filter' >
            <Checkbox label='Show done' className='Filter__checkbox' onCheck={(e, isChecked) => onToggleFilter(isChecked)} checked={filter.showDone} />
            <TextField hintText='Search' defaultValue={filter.query} onChange={e => onQuery(e.target.value)}/>
        </div>
    )
}
