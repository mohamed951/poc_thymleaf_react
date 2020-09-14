import React, { useEffect } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy';
import TodoItem from './TodoItem';

export default function TodoList() {
    const todos = useStoreState(state => state.todos);
    const fetchTodos = useStoreActions(actions => actions.fetchTodos);
    useEffect(() => {
        fetchTodos();
    }, [false])
    // fetchTodos();
    return (
        <div>
            {todos.map(todo => (<TodoItem todo={todo}></TodoItem>))}
        </div>
    );

};
