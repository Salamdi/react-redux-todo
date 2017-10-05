import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
export const
    ADD_CATEGORY = 'ADD_CATEGORY',
    DELETE_CATEGORY = 'DELETE_CATEGORY',
    EDIT_CATEGORY = 'EDIT_CATEGORY';

export class CustomDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {title: this.props.title}
    }

    getActions() {
        switch (this.props.action) {
            case ADD_CATEGORY:
                return [
                    <FlatButton
                        label='Cancel'
                        primary
                        onClick={() => {this.props.handleCancel(); this.setState({title: ''})}}
                    />,
                    <FlatButton
                        type='submit'
                        label='Confirm'
                        primary
                        disabled={!this.state.title}
                        onClick={() => {this.props.handleAddConfirm(this.state.title); this.setState({title: ''})}}
                    />
                ];
            case DELETE_CATEGORY:
                return [
                    <FlatButton
                        label='Cancel'
                        primary
                        onClick={() => {this.props.handleCancel(); this.setState({title: ''})}}
                    />,
                    <FlatButton
                        label='Confirm'
                        autoFocus
                        primary
                        onClick={() => {this.props.handleDeleteConfirm(); this.setState({title: ''})}}
                    />
                ];
            case EDIT_CATEGORY:
                return [
                    <FlatButton
                        label='Cancel'
                        primary
                        onClick={() => {this.props.handleCancel(); this.setState({title: ''})}}
                    />,
                    <FlatButton
                        type='submit'
                        label='Confirm'
                        primary
                        disabled={!this.state.title}
                        onClick={() => {this.props.handleEditConfirm(this.state.title); this.setState({title: ''})}}
                    />
                ];
            default:
                return [
                    <FlatButton
                        label='Ok'
                        primary
                        onClick={() => {this.props.handleCancel(); this.setState({title: ''})}}
                    />
                ]
        }
    }

    getComponents() {
        switch (this.props.action) {
            case ADD_CATEGORY:
                return (
                <form onSubmit={
                    e => {
                        e.preventDefault();
                        if (this.state.title) {
                            this.props.handleAddConfirm(this.state.title);
                            this.setState({title: ''})
                        }
                    }
                }>
                    Add subcategory
                    <TextField
                        autoFocus
                        hintText='Enter category title'
                        onChange={e => this.setState({title: e.target.value})}
                        style={{display: 'block', width: '100%', marginTop: '16px'}}
                    />
                </form>
                );
            case DELETE_CATEGORY:
                return (
                    <p>
                        Delete this category and all subcategories?
                    </p>
                );
            case EDIT_CATEGORY:
                return (
                <form onSubmit={
                    e => {
                        e.preventDefault();
                        if (this.state.title) {
                            this.props.handleEditConfirm(this.state.title);
                            this.setState({title: ''})
                        }
                    }
                }>
                    Edit category
                    <TextField
                        autoFocus
                        hintText='Enter category title'
                        onChange={e => this.setState({title: e.target.value})}
                        defaultValue={this.props.title}
                        style={{display: 'block', width: '100%', marginTop: '16px'}}
                    />
                </form>
                );
            default:
                return (
                    <p>
                        Error occured
                    </p>
                )
        }
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                onRequestClose={this.props.handleCancel}
                actions={this.getActions()}
            >
                {
                    this.getComponents()
                }
            </Dialog>
        )
    }
}
