import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, CATEGORY_SAVE_REQUEST, CATEGORY_SAVE_SUCCESS, CATEGORY_SAVE_FAIL, CATEGORY_EDIT_REQUEST, CATEGORY_EDIT_SUCCESS, CATEGORY_EDIT_FAIL, CATEGORY_DELETE_REQUEST, CATEGORY_DELETE_SUCCESS, CATEGORY_DELETE_FAIL } from '../constants/categoryConstants';
import { getCategories, saveNewCategory, updateCategory, delCategory } from "../../api/category";


const loadCategories = () => async (dispatch) => {
    try {
        dispatch({
            type: CATEGORY_LIST_REQUEST
        });
        const categories = await getCategories();
        dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: categories
        })
    } catch (error) {
        dispatch({
            type: CATEGORY_LIST_FAIL,
            payload: error.response.data.errorMessage
        })
    }
}

const saveCategory = (category) => async (dispatch) => {
    try {
        dispatch({
            type: CATEGORY_SAVE_REQUEST,
            payload: category
        });
        const categoryFromDatabase = await saveNewCategory(category);
        dispatch({
            type: CATEGORY_SAVE_SUCCESS,
            payload: categoryFromDatabase
        })
    } catch (error) {
        dispatch({
            type: CATEGORY_SAVE_FAIL,
            payload: error.response.data.errorMessage
        })
    }
}

const editCategory = (category) => async (dispatch) => {
    try {
        dispatch({
            type: CATEGORY_EDIT_REQUEST,
            payload: category
        });
        const categoryFromDatabase = await updateCategory(category);
        dispatch({
            type: CATEGORY_EDIT_SUCCESS,
            payload: categoryFromDatabase
        })
    } catch (error) {
        dispatch({
            type: CATEGORY_EDIT_FAIL,
            payload: error.response.data.errorMessage
        })
    }
}
const deleteCategory = (categoryId) => async (dispatch) => {
    try {
        dispatch({
            type: CATEGORY_DELETE_REQUEST,
            payload: categoryId
        });
        const successMessage = await delCategory(categoryId);
        dispatch(loadCategories())
        dispatch({
            type: CATEGORY_DELETE_SUCCESS,
            payload: successMessage
        })
    } catch (error) {
        dispatch({
            type: CATEGORY_DELETE_FAIL,
            payload: error.response.data.errorMessage
        })
    }
}


export { loadCategories, saveCategory, editCategory, deleteCategory };