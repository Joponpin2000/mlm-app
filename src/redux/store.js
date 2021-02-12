import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { productDeleteReducer, productDetailsReducer, productEditReducer, productListReducer, productSaveReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducer';
import { getCookie } from '../helpers/cookies';
import { userDeleteReducer, userRegisterReducer, userSigninReducer, usersListReducer } from './reducers/userReducer';
import { getLocalStorage } from '../helpers/localStorage';
import { categoryDeleteReducer, categoryEditReducer, categoryListReducer, categorySaveReducer } from './reducers/categoryReducers';
import { ordersListReducer, orderDeleteReducer } from './reducers/ordersReducer';
import { paymentReducer } from './reducers/paymentReducer';
import { contactSendReducer } from './reducers/contactReducer';


const cartItems = getCookie("cartItems") || [];
const userInfo = getLocalStorage('user') || null;
const initialState = { cart: { cartItems, shipping: {}, payment: {} }, userSignin: { userInfo }, userPayment: { receipt: {} } };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    usersList: usersListReducer,
    productSave: productSaveReducer,
    productEdit: productEditReducer,
    productDelete: productDeleteReducer,
    userDelete: userDeleteReducer,
    userRegister: userRegisterReducer,
    categorySave: categorySaveReducer,
    categoryEdit: categoryEditReducer,
    categoryList: categoryListReducer,
    categoryDelete: categoryDeleteReducer,
    ordersList: ordersListReducer,
    orderDelete: orderDeleteReducer,
    userPayment: paymentReducer,
    contact: contactSendReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
);

export default store;