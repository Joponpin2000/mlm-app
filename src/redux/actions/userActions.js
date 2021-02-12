import { signInUser, signUpUser } from "../../api/auth";
import { fetchUsers, removeUser } from "../../api/user";
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAIL } from "../constants/userConstants";

const signin = (formData) => async (dispatch) => {
    dispatch({
        type: USER_SIGNIN_REQUEST, payload: formData
    })
    try {
        const { data } = await signInUser(formData);
        dispatch({
            type: USER_SIGNIN_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL,
            payload: error.response.data.errorMessage
        })
    }
}

const register = (formData) => async (dispatch) => {
    dispatch({
        type: USER_REGISTER_REQUEST, payload: formData
    })
    try {
        const { data } = await signUpUser(formData);
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data.successMessage
        })
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response.data.errorMessage
        })
    }
}


const listUsers = () => async (dispatch) => {
    try {
        dispatch({
            type: USER_LIST_REQUEST
        });
        const users = await fetchUsers();
        dispatch({
            type: USER_LIST_SUCCESS,
            payload: users
        })
    } catch (error) {

        dispatch({
            type: USER_LIST_FAIL,
            payload: error.response.data.errorMessage
        })
    }
}

const deleteUser = (userId) => async (dispatch) => {
    try {
        dispatch({
            type: USER_DELETE_REQUEST,
            payload: userId
        });
        const res = await removeUser(userId);
        dispatch({
            type: USER_DELETE_SUCCESS,
            payload: res
        })
    } catch (error) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload: error.response.data.errorMessage
        })
    }
}

export { signin, register, listUsers, deleteUser };