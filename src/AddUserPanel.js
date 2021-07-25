import React, { useState } from 'react';


import './AddUserPanel.css';


function AddUserPanel(props) {
    const [userName, setUserName] = useState('');

    const handleChange = (e) => {
        setUserName(e.target.value)
    }

    return(
        <div>
            <input 
                className='adduser-input'
                placeholder="Enter name"
                value={userName}
                onChange={(e) => handleChange(e)}>
            </input>
            <button 
                className='adduser-button'
                onClick={() => {
                    props.addUser(userName);
                    setUserName('');
                }}>Add user</button>
        </div>
    )
}


export default AddUserPanel;