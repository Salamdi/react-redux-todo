import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';
import { CategoriesTree } from '../CategoriesTree';
import ContentAdd from 'material-ui/svg-icons/content/add';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

export const Category = ({
                             category,
                             chldrn,
                             id,
                             toggled,
                             handleDeleteDialogOpen,
                             handleAddDialogOpen,
                             handleDeleteCategory,
                             handleAddSubcategory,
                             handleEditDialogOpen,
                             handleEditCategory,
                             match,
                             onShowSubcategories,
                             onHideSubcategories
                         }) =>
{
    return (
        <div className='Category'>
            {
                chldrn
                    ?
                    <div className='Category__toggle-btn'>
                        <IconButton
                            onClick={
                                toggled
                                    ? () => onHideSubcategories(id)
                                    : () => onShowSubcategories(id)
                            }
                            tooltip='Toggle category'
                        >
                            {toggled ? <HardwareKeyboardArrowUp/> : <HardwareKeyboardArrowDown/>}
                        </IconButton>
                    </div>
                    :
                    null
            }
            <div className='Category__self'>
                <p className='Category__name'>
                    <Link
                        to={`/${id}`}
                        style={match.params.catId === id ? {
                            color: 'black',
                            textdecoration: 'none',
                            fontWeight: 'bold',
                            verticalAlign: 'super'
                        } : {verticalAlign: 'super'}}
                    >
                        {category}
                    </Link>
                    <IconButton tooltip={`edit ${category}`} onClick={handleEditDialogOpen}>
                        <EditorModeEdit/>
                    </IconButton>
                </p>
                <IconButton tooltip={`remove ${category}`} onClick={handleDeleteDialogOpen}>
                    <ActionDelete/>
                </IconButton>
                <IconButton tooltip={`add subcategory to ${category}`} onClick={handleAddDialogOpen}>
                    <ContentAdd/>
                </IconButton>
            </div>
            {
                chldrn && toggled
                    ? <CategoriesTree
                        tree={chldrn}
                        inner
                        handleDeleteCategory={handleDeleteCategory}
                        handleAddSubcategory={handleAddSubcategory}
                        handleEditCategory={handleEditCategory}
                        match={match}
                        onHideSubcategories={onHideSubcategories}
                        onShowSubcategories={onShowSubcategories}
                    />
                    : null
            }
        </div>
    )
};
