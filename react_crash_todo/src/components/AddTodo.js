import React, { useState } from 'react'
import { useStoreActions } from 'easy-peasy';

export default function AddTodo() {
    const [title, setTitle] = useState('');
    const addTodo = useStoreActions(actions => actions.addTodo);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(title);
            addTodo({
                title,
                completed: false
            })
            setTitle('');
        }}>
            <input value={title} onChange={e => setTitle(e.target.value)}></input>
            <input type="submit"  ></input>
        </form>
    )
}