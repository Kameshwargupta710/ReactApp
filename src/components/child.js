import React from 'react';
import Smallchild from './smallChild.js';

// Functional component
const Child=(props)=>{           
    return(
        <div>
        <Smallchild {...props}></Smallchild>
        {/* <button onClick={props.dowhatever}>{props.title}</button> */}
        </div>
    )
}

export default Child;