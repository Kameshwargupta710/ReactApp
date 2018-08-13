import React from 'react';


// Functional component
const User=(props)=>{           
    return(
        <div>
            
            Name : {props.children} | Age : {props.age} &nbsp; &nbsp; &nbsp; &nbsp;
            <input  onChange={props.changeEvent} value={props.children}/> 
            <button onClick={props.delete}>Delete</button>
            </div>
    )
}


export default User;