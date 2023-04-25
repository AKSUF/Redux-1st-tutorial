// Importing createStore function from redux
const { createStore } = require("redux");

// Defining action types
const ADD_USER = 'ADD_USER';

// Defining initial state
const initialState = {
    users: ['abu'],
    count: 1,
}

// Creating an action creator for increment
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user,
    };
}

// Defining reducer
const userReducer = (state = initialState, action) => {
    // Using a switch case to handle different types of actions
    switch (action.type) {
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1,
            };
        default:
            // If the action type is not recognized, return the state unchanged
            state;
    }
}

// Creating a store by passing the reducer to createStore function
const store = createStore(userReducer);

// Adding a subscriber to the store to log state changes
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addUser("rafiq"));
store.dispatch(addUser("sagor"));