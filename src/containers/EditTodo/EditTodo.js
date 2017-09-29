import React, { Component } from 'react'
import './EditTodo.css'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import { connect } from 'react-redux'
import { editTodo } from '../../store/actions'

class EditTodo extends Component {
    constructor(props) {
        super(props)
        this.state = Object.assign({}, this.props.todo)
    }

    handleSave = () => {
        this.props.dispatch(editTodo(this.props.match.params.catId, this.state))
        this.props.history.goBack()
    }

    render() {
        const {goBack} = this.props.history
        
        return this.props.todo
            ? (
                <div className='EditTodo' >
                    <div className='EditTodoRow__content_pos-left'>
                        <FlatButton
                            label='Save changes'
                            primary
                            onClick={this.handleSave}
                            disabled={
                                this.state.completed === this.props.todo.completed
                                && this.state.title === this.props.todo.title
                                && this.state.text === this.props.todo.text
                            }
                        />
                        <FlatButton
                            label='Cancel'
                            primary
                            onClick={goBack}
                        />
                    </div>
                    
                    <div className='EditTodoRow' >
                        <TextField hintText='Todo title' value={this.state.title} onChange={e => this.setState({title: e.target.value})} />
                    </div>
                    
                    <Checkbox checked={this.state.completed} onClick={e => this.setState({completed: e.target.checked})} />
                    <TextField hintText='Todo description' multiLine fullWidth value={this.state.text} onChange={e => this.setState({text: e.target.value})} />
                </div>
            )
            : (
                <div className='EditTodo' >
                    <p>Todo not found</p>
                </div>
            )
    }
}

const matchStateToProps = (state, ownProps) => ({
    todo: findTodo(
        state.present.categories,
        ownProps.match.params.catId,
        ownProps.match.params.todoId
    )
})

const findTodo = (cats, catId, todoId) =>
    cats.find(
        cat => cat.id === catId
    ).todos.find(
        todo => todo.id === todoId
    )

export default connect(matchStateToProps)(EditTodo)