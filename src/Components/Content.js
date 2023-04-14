import React from 'react'
import styled from "styled-components";
import HabitTrack from './HabitTrack';

const Heading = styled.div`
    text-transform: uppercase;
    align-items: center;
    font-size: 30px;

`

const Content = ({ id }) => {
    const items = JSON.parse(localStorage.getItem("itemArray"));
    const selectedGoal = items?.filter(item => item.id == id)[0];
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}><Heading>{selectedGoal?.task?.name}</Heading></div>
            <HabitTrack id={id} selectedGoal={selectedGoal}></HabitTrack>

        </div >
    )
}

export default Content
