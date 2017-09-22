import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'
import { CategoriesTree } from '../CategoriesTree'
import ContentAdd from 'material-ui/svg-icons/content/add'
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import IconButton from 'material-ui/IconButton'
import HardwareKeyboardArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up'
import HardwareKeyboardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down'

export const Category = ({
    category,
    chldrn,
    id,
    onToggle,
    toggled,
    handleDeleteDialogOpen,
    handleAddDialogOpen,
    handleDeleteCategory,
    handleAddSubcategory,
    handleEditDialogOpen,
    handleEditCategory,
    onCategorySelect,
    selected,
}) => {

    return (
        <div className='Category' >
            {
                chldrn
                    ?
                        <div className='Category__toggle-btn' >
                            <IconButton onClick={() => onToggle(id)} tooltip='Toggle category' >
                                {toggled ? <HardwareKeyboardArrowUp /> : <HardwareKeyboardArrowDown />}
                            </IconButton>
                        </div>
                    :
                        null
            }
            <div className='Category__self' >
                <p className='Category__name' >
                    <Link
                        to={`/category/${id}`}
                        className={selected ? 'Category__Link Category__Link_active' : 'Category__Link'}
                        onClick={() => onCategorySelect(id)}
                    >
                        { category }
                    </Link>
                    <IconButton tooltip={`edit ${category}`} onClick={handleEditDialogOpen} >
                        <EditorModeEdit />
                    </IconButton>                    
                </p>
                <IconButton tooltip={`remove ${category}`} onClick={handleDeleteDialogOpen}>
                    <ActionDelete />
                </IconButton>
                <IconButton tooltip={`add subcategory to ${category}`} onClick={handleAddDialogOpen}>
                    <ContentAdd />
                </IconButton>
            </div>
            {
                chldrn && toggled
                    ? <CategoriesTree
                        tree={chldrn}
                        inner
                        onToggle={onToggle}
                        handleDeleteCategory={handleDeleteCategory}
                        handleAddSubcategory={handleAddSubcategory}
                        handleEditCategory={handleEditCategory}
                        onCategorySelect={onCategorySelect}
                    />
                    : null
            }
        </div>
    )
}