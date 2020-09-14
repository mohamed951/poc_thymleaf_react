import { action, thunk } from 'easy-peasy';
import axios from 'axios';
export default {
    todos: [],
    //Thunks
    fetchTodos: thunk((actions) => {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => {
                actions.set(res.data)
            });
    }),
    addTodo: thunk((actions, todo) => {
        console.log(todo);
        axios.post('https://jsonplaceholder.typicode.com/todos', todo)
            .then(res => actions.add(res.data));
    }),
    //Actions
    set: action((state, todos) => {
        state.todos = todos;
    }),
    add: action((state, todo) => {
        const newState = [...state.todos, todo];
        state.todos = newState;
        console.log(state.todos, "TODOS")
    })
}