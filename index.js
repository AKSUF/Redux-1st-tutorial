// Constants for Redux actions INCREMENT, DECREMENT, and ADDUSER.const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADDUSER = 'ADDUSER';
//state
/* An object containing an initial state for a Redux store, with one user object with the name 'anisul' */
const initialcounterState = {
        users: [
            { name: 'anisul' }
        ]
    }
    // Initial state object for user count with initial count of zero
const initialUserState = {
        count: 0,
    }
    // This is a Redux action creator
    // function that returns an action object with type INCREMENT.
const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
}

// These are action creator functions
// for decrementing and incrementing the counter.
const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
}


// This code defines a Redux action creator
// function
// for decrementing the counter and a reducer
// function to handle state changes
// for INCREMENT and DECREMENT actions.
const counterReducer = (state = initialcounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            break;

    }
}