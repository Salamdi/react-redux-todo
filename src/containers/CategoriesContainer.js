import { connect } from 'react-redux'
import { CategoriesTree } from '../components/CategoriesTree'
import {
    toggleCategory,
    deleteCategory,
    addCategory,
    editCategory
} from '../store/actions'

const matchStateToProps = state => ({
    tree: getTree(state.present.categories),
})

const matchDispatchToProps = dispatch => ({
    onToggle: id => dispatch(toggleCategory(id)),
    handleDeleteCategory: id => dispatch(deleteCategory(id)),
    handleAddSubcategory: (id, title) => dispatch(addCategory(id, title)),
    handleEditCategory: (id, title) => dispatch(editCategory(id, title)),
})

export default connect(matchStateToProps, matchDispatchToProps)(CategoriesTree)

const getTree = categories => {
    let tree = categories.map(cat => Object.assign({}, cat))
    tree.forEach(cat => {
        if (cat.parentId !== null && cat.parentId !== undefined) {
            let parent = tree.find(c => c.id === cat.parentId)
            if (!parent.chldrn) parent.chldrn = []
            parent.chldrn.push(cat)
        }
    })
    return tree.filter(cat => cat.parentId === null || cat.parentId === undefined)
}
