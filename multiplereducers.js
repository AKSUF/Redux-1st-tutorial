//products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCTS";
//cart constants
const GET_CART_ITEMS = "GET_CART_ITEMS";
const ADD_CART_ITEM = "ADD_CART_ITEM";

// Importing createStore and combineReducers functions from redux
const { createStore, combineReducers } = require("redux");

//product reducer 
const initialProductState = {
    product: ["sugar", "salt"],
    numberOfProducts: 2
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

//cart reducer
const initialCartState = {
    cart: ["sugar", "salt"],
    numberOfProducts: 1
}

const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART_ITEMS:
            return {
                ...state,
            };
        case ADD_CART_ITEM:
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer
});

const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProduct("pen"));
store.dispatch(getCarts());
store.dispatch(addCart("banana"));
store.dispatch(addCart("jackfruit"));