const { createStore } = require("redux");

// Constants for Redux actions INCREMENT, DECREMENT, and ADDUSER.
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADDUSER = 'ADDUSER';

// Initial state object for counter with initial count of zero
const initialCounterState = {
    count: 0,
};

// An object containing an initial state for a Redux store, with one user object with the name 'anisul'
const initialUserState = {
    users: [
        { name: 'anisul' }
    ],
};

// This is a Redux action creator function that returns an action object with type INCREMENT.
const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
};

// These are action creator functions for decrementing and incrementing the counter.
const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
};

// This code defines a Redux reducer function to handle state changes for INCREMENT and DECREMENT actions.
const counterReducer = (state = initialCounterState, action) => {
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
        default:
            return state;
    }
};

// Create Redux store
const store = createStore(counterReducer);

// Subscribe to store updates
store.subscribe(() => {
    console.log(store.getState());
});

// Dispatch actions
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());