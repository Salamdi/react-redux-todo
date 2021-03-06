import React, { Component } from 'react'
import './CategoriesTree.css'
import { Category } from '../Category'
import { CustomDialog } from '../CustomDialog'
import { DELETE_CATEGORY, ADD_CATEGORY, EDIT_CATEGORY } from '../CustomDialog';


export class CategoriesTree extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false}
    }

    handleDeleteDialogOpen(id) {
        this.setState({open: true, id, action: DELETE_CATEGORY})
    }

    handleAddDialogOpen(id) {
        this.setState({open: true, id, action: ADD_CATEGORY})
    }

    handleEditDialogOpen(id, title) {
        this.setState({open: true, id, action: EDIT_CATEGORY, title})
    }

    handleCancel() {
        this.setState({open: false, id: null, title: null, action: null})
    }

    handleDeleteConfirm() {
        this.props.handleDeleteCategory(this.state.id);
        this.setState({open: false, id: null, title: null, action: null})
    }

    handleAddConfirm(title) {
        this.props.handleAddSubcategory(this.state.id, title);
        this.setState({open: false, id: null, title: null, action: null})
    }

    handleEditConfirm(title) {
        this.props.handleEditCategory(this.state.id, title);
        this.setState({open: false, id: null, title: null, action: null})
    }

    render() {
        return (
            <div className={this.props.inner ? 'CategoriesTree CategoriesTree_inner' : 'CategoriesTree'}>
                <CustomDialog
                    open={this.state.open}
                    action={this.state.action}
                    handleCancel={() => this.handleCancel()}
                    handleDeleteConfirm={() => this.handleDeleteConfirm()}
                    handleAddConfirm={title => this.handleAddConfirm(title)}
                    handleEditConfirm={title => this.handleEditConfirm(title)}
                    title={this.state.title}
                />
                {this.props.tree.map(
                    cat => <Category
                        key={cat.id}
                        {...cat}
                        {...this.props}
                        handleDeleteDialogOpen={() => this.props.handleDeleteCategory(cat.id)}
                        handleAddDialogOpen={() => this.handleAddDialogOpen(cat.id)}
                        handleEditDialogOpen={() => this.handleEditDialogOpen(cat.id, cat.category)}
                    />
                )}
            </div>
        )
    }
}