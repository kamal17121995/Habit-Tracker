import React from 'react'
import '../CSS/history.css'
import { useSelector, useDispatch } from 'react-redux';


const History = () => {

    const items = JSON.parse(localStorage.getItem("itemArray"));

    const dispatch = useDispatch()

    const selectedGoal = (_id) => items.filter(item => item.id == _id)[0];

    const todos = useSelector(state => state.todos);
    // const date = new Date(todos.date);
    // const formattedDate = date.toLocaleString();



    const deleteTodo = (_id) => {
        const filteredTodos = todos.filter(todo => todo.id != _id);
        dispatch({ type: 'DELETE_TODO', payload: filteredTodos });
    }

    return (
        <div>
            <h1 className='history-title'>History</h1>

            <ul>
                {todos.map(todo => (
                    <div key={todo.id} className='render-item'>
                        <div>{selectedGoal(todo.id)?.task?.name}</div>
                        <div>{todo.date}</div>
                        <div className='work-done'>

                            {todo.value}
                        </div>
                        <button className='delete-todo' onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </div>

                ))}
            </ul>
        </div>
    )
}

export default History
