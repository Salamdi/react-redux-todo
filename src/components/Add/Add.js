import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import './Add.css'

export class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {value: ''}
    }

    handleSubmit = e => {
        e.preventDefault()
        if (!this.state.value) return
        this.props.onItemAdd(this.state.value)
        this.setState({value: ''})
    }

    handleChange = e => {
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <form
                className='Add'
                onSubmit={this.handleSubmit} >
                <TextField hintText={this.props.placeholder} value={this.state.value} onChange={this.handleChange}/>
                <RaisedButton label='Add' type='submit' style={{marginLeft: '16px'}} disabled={!this.state.value}/>
            </form>
        )
    }
}