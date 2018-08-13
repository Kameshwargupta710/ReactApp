import React from 'react';


// Functional component
const Smallchild=(props)=>{           
    return(
        <div>
           <button onClick={props.dowhatever}>{props.title}</button>
        </div>
    )
}

export default Smallchild;