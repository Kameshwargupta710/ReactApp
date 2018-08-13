import React,{Component} from 'react';



class Dropbox extends Component{   
    

state ={
    users:["hello","kameshwar"],
    myname:" "
    }      
    

    // changeusername=(id,e)=>{
    //     const index = this.state.users.findIndex((user)=>{
    //         return user.id === id;
    //     });
    //     const user = Object.assign({},this.state.users[index]);
    //     user.name = e.target.value;
    //     const users=Object.assign([],this.state.users);
    //     users[index]=user;
    //     this.setState({users:users});
    // }

    // setStateusinghardcode=()=>{
    //     const newState = this.state.users.map((user)=>{
    //         const tempUser = user;
    //         tempUser.age += 10;
    //         return tempUser
    //     })
    //     this.setState({
    //         newState
    //     })
       
    // }


    changenameusingbind=(Name)=>{
        this.setState({
            users:[this.state.users[0],this.state.users[1],Name]
        })
    }
    //addData=()=>{
    //     const d1 = Object.assign({},this.state.users);
    // //     user.name = e.target.value;
    // //     const users=Object.assign([],this.state.users);
    // //     users[index]=user;
    // //     this.setState({users:users});
    // }

    changenameusingInput=(event)=>{
        this.setState({
            myname:event.target.value
        }) 

    }

    
    render(){
        return(
            <div>
               
               <input type="text" onChange={this.changenameusingInput} value={this.state.myname}/>  
                <button onClick={this.changenameusingbind.bind(this,this.state.myname)}>Change Name</button>
                <h3>{this.state.myname}</h3>
                <br/>
                <select id="userlist">
                    <option value="">{this.state.users}</option>
                </select> 

                {/* Children of User 
                <button onClick={this.setStateusinghardcode}>Age Increment</button>

                <button onClick={this.changenameusingbind.bind(this,'AAAAAAAAAAA')}>Change Name</button>

                <h1>{this.state.title}</h1>
                
                {/* Two way data binding */}
                {/* <input type="text" onChange={this.changenameusingInput} value={this.state.myname}/>  
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
                    </ul> */}

                {/* <User age={this.state.users[0].age}>{this.state.users[0].name}</User>     
                <User age={this.state.users[1].age}>{this.state.users[1].name}</User>
                <User age={this.state.users[2].age}>{this.state.users[2].name}</User> */}

                {/* <User age='21'>Kameshwar</User>     
                <User age='22'>Sourabh</User>
                <User age='23'>Parag</User> */} 

            </div>
        )
    }
}

export default Dropbox;