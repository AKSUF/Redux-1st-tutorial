const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADDUSER = 'ADDUSER';
//state
const initialcounterState = {
    users: [
        { name: 'anisul' }
    ]
}
const initialUserState = {
        count: 0,
    }
    //action//increment counter

//action -object-type,payload
const incrementCounter = () => {
    return {
        type: INCREMENT,
    };
}
const decrementCounter = () => {
    return {
        type: DECREMENT,
    };
}
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