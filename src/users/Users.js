import React,{Component} from 'react';
import User from './User';
//import UniqueId from 'react-html-id';



//Class Component
class Users extends Component{   
    
// constructor(){
//     super();
//     UniqueId.enableUniqueIds(this);
//     this.state ={
//         users:[
//             {id:this.nextUniqueId(),name:'Rahul',age:21},
//             {id:this.nextUniqueId(),name:'Rajesh',age:22},
//             {id:this.nextUniqueId(),name:'Ram',age:25}
//         ],
//         title:"USERS LIST",
//         myname:"RRRRR"
//     }
// }


state ={
    users:[
        {id:1,name:'Rahul',age:21},
        {id:2,name:'Rajesh',age:22},
        {id:3,name:'Ram',age:25}
    ],
    title:"USERS LIST",
    myname:"RRRRR"
} 
    

    changeusername=(id,e)=>{
        const index = this.state.users.findIndex((user)=>{
            return user.id === id;
        });
        const user = Object.assign({},this.state.users[index]);
        user.name = e.target.value;
        const users=Object.assign([],this.state.users);
        users[index]=user;
        this.setState({users:users});
    }

    setStateusinghardcode=()=>{
        const newState = this.state.users.map((user)=>{
            const tempUser = user;
            tempUser.age += 10;
            return tempUser
        })
        this.setState({
            newState
        })
       
    }


    changenameusingbind=(Name)=>{
        this.setState({
            myname:Name
        })
    }

    changenameusingInput=(event)=>{
        this.setState({
            myname:event.target.value
        })
    }



    deleteuser=(index,e)=>{
        const u1=Object.assign([],this.state.users);
        u1.splice(index,1);
        this.setState({users:u1})
    }
    // setStateusinghardcode=()=>{
    //     this.setState({
    //         users:[
    //             {name:'Rahul',age:36},
    //             {name:'Rajesh',age:45},
    //             {name:'Ram',age:65}
    //         ],
    //         title:"USERS LIST Age has Changed"
    //     })
    // }
a
    
    render(){
        return(
            <div>

                {/* Children of User  */}
                <button onClick={this.setStateusinghardcode}>Age Increment</button>

                <button onClick={this.changenameusingbind.bind(this,'AAAAAAAAAAA')}>Change Name</button>

                <h1>{this.state.title}</h1>
                
                {/* Two way data binding */}
                <input type="text" onChange={this.changenameusingInput} value={this.state.myname}/>  
                <h3>{this.state.myname}</h3>


                <ul>{
                    this.state.users.map((user,index)=>{
                        return <User age={user.age} 
                        changeEvent={this.changeusername.bind(this,user.id)}
                        key={user.id}
                        delete={this.deleteuser.bind(this,index)}
                        >{user.name}</User>
                    })
                }
                    </ul>

                {/* <User age={this.state.users[0].age}>{this.state.users[0].name}</User>     
                <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
                <User age={this.state.users[2].age}>{this.state.users[2].name}</User> */}

                <User age='21'>Kameshwar</User>     
                <User age='22'>Sourabh</User>
                <User age='23'>Parag</User>

            </div>
        )
    }
}

export default Users;