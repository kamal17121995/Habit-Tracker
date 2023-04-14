import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Goals from './Goals';
import Content from './Content';
import History from './History';
import '../CSS/myhabits.css'

const MyHabits = () => {
    const { id } = useParams();
    console.log(id, 'id here');
    const [date, setDate] = useState(new Date());

    // useEffect(() => {
    //     const timer = setInterval(() => setDate(new Date()), 1000);
    //     return () => clearInterval(timer);
    // }, []);

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = daysOfWeek[date.getDay()];
    console.log(setDate);

    return (
        <div className='grid-container'>
            <div className='nav'>
                <h1 className='title'>Consistency</h1>
                <Goals />
            </div>
            <div className='main-conatiner'>
                <div className='header-content'>
                    <div className='date-day'>
                        <p>Date: {date.toLocaleDateString()}, {" "}</p>
                        <p>{dayOfWeek}</p>
                    </div>
                </div>
                <Content id={id}></Content>

                <History id={id}>History</History>
            </div>
        </div>
    )
}

export default MyHabits
