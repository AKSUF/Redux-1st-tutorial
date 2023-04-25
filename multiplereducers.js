//products constants
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCTS";
// Importing createStore function from redux
const { createStore } = require("redux");
//productreducer 
const initialProductState = {
    product: ["sugar", "salt"],
    numberofProducts: 2
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
    //productreducer
const productreducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            };
        case ADD_PRODUCT:
            return {
                products: [...state.product, action.payload],
                numberofProducts: state.numberofProducts + 1
            };
        default:
            state;

    }
}
const store = createStore(productreducer);
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(getProducts());
store.dispatch(addProduct("pen"));