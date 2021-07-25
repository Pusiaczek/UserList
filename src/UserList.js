import React from 'react';

import './UserList.css';



function UserList(props) {


    return(
        <ul className='user-list'>
            {props.userListArr.map( (item, index) => 
            <li className='list-item' 
                key={index} 
                value={index}>
                {item}
                <span 
                    className="delete-button"
                    onClick={() => props.deleteItem(index)}
                    >X
                </span>
            </li>)}
        </ul>
    )
}


export default UserList;