import { createStore } from 'redux';

// Define the initial state of the store
const initialState = {
    todos: []
};

// Define the reducer function
function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };

        case 'DELETE_TODO':
            return {
                ...state,
                todos: action.payload
            };
        default:
            return state;
    }
}

// Create the store
const store = createStore(todoReducer);

export default store;