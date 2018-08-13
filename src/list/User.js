import React from 'react';


// Functional component
const User=(props)=>{           
    return(
        <div>
            Name : {props.children} | Age : {props.age} 
            <button onClick={props.delete}>Delete User</button>
            </div>
    )
}

export default User;