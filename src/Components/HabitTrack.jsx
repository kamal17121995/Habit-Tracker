import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// import styled from "styled-components";
import '../CSS/content.css'

const HabitTrack = ({ id, selectedGoal }) => {

  const todos = useSelector(state => state.todos);
  const [selectedOption, setSelectedOption] = useState('');
  const dispatch = useDispatch();

  //saving the todo with redux in history
  const handleOptionChange = () => {

    if (todos.some(todo => todo.id == id)) return

    if (selectedOption) {
      console.log(todos)
      const date = Date.now();
      const formattedDate = new Date(date)
      dispatch({ type: 'ADD_TODO', payload: { id, date: formattedDate.toDateString(), value: selectedOption } });
      console.log(formattedDate)
    }
  }

  return (
    <div className='activity'>
      <label>
        <input
          type="radio"
          value="done"
          checked={selectedOption === 'done'}
          onChange={(event) => setSelectedOption(event.target.value)}
        />
        <img src='./images/correct.png' alt='' />
        Done
      </label>
      <label>
        <input
          type="radio"
          value="not Done"
          checked={selectedOption === 'not Done'}
          onChange={(event) => setSelectedOption(event.target.value)}
        />
        <img src='./images/wrong.png' alt='' />
        Not Done
      </label>
      <label>
        <input
          type="radio"
          value="none"
          checked={selectedOption === 'none'}
          onChange={(event) => setSelectedOption(event.target.value)}
        />
        <img src='./images/none.jpg' alt='' />
        None
      </label>
      <button onClick={handleOptionChange}>Save</button>
    </div>
  )
}

export default HabitTrack;
