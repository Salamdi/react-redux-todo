import React, { Component } from 'react'
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

/* export class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = this.props.filter
    }

    handleChange = e => {
        this.setState({query: e.target.value})
        this.props.onQuery(e.target.value)
    }

    handleCheck = (e, bool) => {
        this.setState({showDone: String(bool)})
        this.props.onToggleFilter(bool)
    }

    handleClick = e => {
        this.setState({query: ''})
        this.props.clearSearch()
    }

    render = () => {
        return (
            <div className='Filter' >
                <Checkbox
                    label='Show done'
                    className='Filter__checkbox'
                    id='text-field-controlled'
                    onCheck={this.handleCheck}
                    checked={this.state.showDone === 'true' ? true : false}
                />
                <TextField
                    hintText='Search'
                    onChange={this.handleChange}
                    value={this.state.query}
                />
                <IconButton onClick={this.handleClick} >
                    <ContentClear />
                </IconButton>
            </div>
        )
    }
} */
