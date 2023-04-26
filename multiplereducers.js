//products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCTS";

const { applyMiddleware } = require('redux');
// Importing createStore and combineReducers functions from redux
const { createStore, combineReducers } = require("redux");
const { default: logger } = require('redux-logger');

//product reducer 
const initialProductState = {
    product: ["sugar", "salt"],
    numberOfProducts: 2
}
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            };
        case ADD_PRODUCT:
            return {
                product: [...state.product, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            };
        default:
            return state;
    }
}




const rootReducer = combineReducers({
    product: productReducer,

});

const store = createStore(rootReducer, applyMiddleware(logger));
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("pen"));