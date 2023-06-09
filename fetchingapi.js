const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
const Get_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todos";
const axios = require('axios')
    //state
const initialTodoState = {
        todos: [],
        isLoading: false,
        error: null,
    }
    //action
const getTodosRequest = () => {
    return {
        type: Get_TODOS_REQUEST,
    }
}

const getTodosFailed = (error) => {
    return {
        type: GET_TODOS_FAILED,
        payload: error
    }
}
const getTodosSuccess = (todos) => {
        return {
            type: GET_TODOS_SUCCESS,
            payload: todos
        }
    }
    //reducers
const todosReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case Get_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload
            }
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
const fetchData = () => {
    return (dispatch) => {
        dispatch(getTodosRequest());
        axios.get(API_URL).then(res => {
            const todos = res.data;
            const title = todos.map(todo => todo.title);
            dispatch(getTodosSuccess(title));
            console.log(title);
        }).catch(error => {
            const errorMessage = error.message;
            dispatch(getTodosFailed(errorMessage));
        })
    }
}


//store
const store = createStore(todosReducer, applyMiddleware(thunk));
store.subscribe(() => {
    console.log(store.getState());
});
store.dispatch(fetchData())