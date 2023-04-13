import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import '../CSS/goals.css'

const Goals = () => {
    //goals
    const array = [
        { id: 1, task: { name: "Goal 1", status: "Not Done" } },
        { id: 2, task: { name: "Goal 2", status: "Not Done" } },
        { id: 3, task: { name: "Goal 3", status: "Not Done" } },
        { id: 4, task: { name: "Goal 4", status: "Not Done" } },
        { id: 5, task: { name: "Goal 5", status: "Not Done" } },
    ]

    const [items, setItems] = useState(array);

    const [showPopUp, setShowPopUp] = useState(false);
    const [newItem, setNewItem] = useState('');



    const handleAddItem = () => {
        setShowPopUp(true);
    }

    const handlePopUpClose = () => {
        setShowPopUp(false);

    }

    const handleNewItemInputChange = (event) => {
        setNewItem(event.target.value);
    }

    const handleNewItemSubmit = (event) => {
        event.preventDefault();
        const popup = { task: { 'name': newItem, 'status': 'Not Done' } }
        setItems([...items, popup]);
        setShowPopUp(false);
        setNewItem('');
        console.log(newItem);
        localStorage.setItem("itemArray", JSON.stringify([...items, popup]))
    }

    useEffect(() => {
        localStorage.setItem("itemArray", JSON.stringify([...items]))
    }, [items]);


    //delete Goals
    const deleteGoal = (id) => {

        const myNewItem = items.filter((currElm) => {
            return currElm.id !== id;
        })
        setItems(myNewItem)
        console.log(myNewItem)
    }

    return (
        <div className='goal-container'>
            <div className='goal-header'>
                <div className='goal-title'>Goals</div>
                <div className='goal-button'>
                    <button onClick={handleAddItem}>
                        <img src="images/add.png" alt="add-goal-btn" className='goal-img' />
                        Add a Goal
                    </button>
                </div>
            </div>
            {/* Pop up for input goals */}
            {showPopUp &&
                <div className="pop-up">
                    <form onSubmit={handleNewItemSubmit}>
                        <input
                            id="new-item-input"
                            type="text"
                            value={newItem}
                            onChange={handleNewItemInputChange}
                        />
                        <button type="submit" >Add</button>
                        <button onClick={handlePopUpClose}>Cancel</button>
                    </form>
                </div>
            }

            {items.map((item, index) => (
                <div key={item.id} className='goal-row'>
                    <div className='name'>
                        <Link
                            title={item.task.name}
                            to={`/${item.id}`}
                            className='link'>
                            {item.task.name}
                        </Link>

                    </div>
                    <div className='action' onClick={() => deleteGoal(item.id)}><img src="images/delete.png" alt="" /></div>
                </div>
            ))}

        </div>
    )
}

export default Goals
