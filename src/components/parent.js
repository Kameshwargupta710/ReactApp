import React,{Component} from 'react';
import Child from './child';



//Class Component
class Parent extends Component{   
    

    state ={
        title:"USERS LIST",
    }

    changeTheWorld=(newTitle)=>{
        this.setState({
            title:newTitle
        })
    }

    
    render(){
        return(
            <div>
                <Child dowhatever={this.changeTheWorld.bind(this,"Bind Changed Title")} title={this.state.title}></Child>
            </div>
        )
    }
}

export default Parent;