import { connect } from 'react-redux'
import { CategoriesTree } from '../components/CategoriesTree'
import {
    deleteCategory,
    addCategory,
    editCategory
} from '../store/categories'
import {
    showSubcategories,
    hideSubcategories
} from '../store/toggledCategories'

const mapStateToProps = state => ({
    tree: getTree(state.categories.present, state.toggledCategories),
});

const mapDispatchToProps = dispatch => ({
    onShowSubcategories: id => dispatch(showSubcategories({id})),
    onHideSubcategories: id => dispatch(hideSubcategories({id})),
    handleDeleteCategory: id => dispatch(deleteCategory({id})),
    handleAddSubcategory: (id, title) => {
        dispatch(addCategory({id, title}));
        dispatch(showSubcategories({id}));
    },
    handleEditCategory: (id, title) => dispatch(editCategory({id, title})),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesTree)

const getTree = (categories, toggledCategories) => {
    let tree = categories.map(cat => Object.assign({}, cat));
    tree.forEach(cat => {
        if (cat.parentId !== null && cat.parentId !== undefined) {
            let parent = tree.find(c => c.id === cat.parentId);
            parent.toggled = toggledCategories[parent.id];
            if (!parent.chldrn) parent.chldrn = [];
            parent.chldrn.push(cat)
        }
    });
    return tree.filter(cat => cat.parentId === null || cat.parentId === undefined)
};
