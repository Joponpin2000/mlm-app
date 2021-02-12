import { setAuthentication } from "../../helpers/auth";

const { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAIL } = require("../constants/userConstants");

function userSigninReducer(state = {}, action) {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return {
                loading: true
            };

        case USER_SIGNIN_SUCCESS:
            setAuthentication(action.payload.token, action.payload.user);
            return {
                loading: false,
                userInfo: action.payload
            };

        case USER_SIGNIN_FAIL:
            return {
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}

function userRegisterReducer(state = {}, action) {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                loading: true
            };

        case USER_REGISTER_SUCCESS:
            return {
                loading: false,
                successmsg: action.payload
            };

        case USER_REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}

function usersListReducer(state = { users: [] }, action) {

    switch (action.type) {
        case USER_LIST_REQUEST:
            return {
                loading: true,
                users: []
            };

        case USER_LIST_SUCCESS:
            return {
                loading: false,
                users: action.payload,
            };
        case USER_LIST_FAIL:
            return {
                loading: false, error: action.payload
            };
        default:
            return state;
    }
}

function userDeleteReducer(state = { user: {} }, action) {

    switch (action.type) {
        case USER_DELETE_REQUEST:
            return {
                loading: true
            };

        case USER_DELETE_SUCCESS:
            return {
                loading: false,
                success: true,
                user: action.payload
            };
        case USER_DELETE_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export { userSigninReducer, userRegisterReducer, usersListReducer, userDeleteReducer };