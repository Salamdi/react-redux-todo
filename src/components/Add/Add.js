import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import './Add.css'

export const Add = ({placeholder, onItemAdd}) => {

    let tf;
    
    const onSubmit = (e) => {
        e.preventDefault()
        if (!tf.input.value) return
        onItemAdd(tf.input.value)
        tf.input.value = ''
    }

    return (
        <form
            className='Add'
            onSubmit={e => onSubmit(e)} >
            <TextField hintText={placeholder} ref={node => tf = node} />
            <RaisedButton label='Add' type='submit' style={{marginLeft: '16px'}}/>
        </form>
    )
}