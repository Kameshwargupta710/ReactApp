import React,{Component} from 'react';
import User from './User';




//Class Component
class userlist extends Component{   
    

    state ={
        users:[
            {name:'Rahul',age:21},
            {name:'Rajesh',age:22},
            {name:'Ram',age:25}
        ],
        title:"USERS LIST",
        myname:"RRRRR"
    }


    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <ul>{
                    this.state.users.map((user)=>{
                        return <User age={user.age}>{user.name}</User>
                    })
                }
                    </ul>
            </div>
        )
    }
}

export default userlist;