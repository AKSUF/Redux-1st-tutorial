// Importing createStore function from redux
const { createStore } = require("redux");

// Defining action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const INCREMENT_BY_VALUE = 'INCREMENT_BY_VALUE';
// Defining initial state
const initialState = {
    count: 2,
}

// Defining an action
{
    type: INCREMENT

}

// Creating an action creator for increment
const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    };
}

// Creating an action creator for decrement
const decrementCounterAction = () => {
    return {
        type: DECREMENT,
    };
}

// Creating an action creator for reset
const resetCounterAction = () => {
    return {
        type: RESET,
    };
};
// Creating an action creator for reset
const incrementCounterByValue = (value) => {
    return {
        type: INCREMENT_BY_VALUE,
        payload: value,
    };
};


// Defining reducer
const counterReducer = (state = initialState, action) => {
    // Using a switch case to handle different types of actions
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            };
        case RESET:
            return {
                ...state,
                count: 0,
            };
        case INCREMENT_BY_VALUE:
            return {
                ...state,
                count: state.count + action.payload,
            };


        default:
            // If the action type is not recognized, return the state unchanged
            state;
    }
}

// Creating a store by passing the reducer to createStore function
const store = createStore(counterReducer);

// Adding a subscriber to the store to log state changes
store.subscribe(() => {
    console.log(store.getState());
})


// Dispatching actions to the store
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
// store.dispatch(resetCounterAction());
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(10));