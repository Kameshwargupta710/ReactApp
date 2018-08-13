import React, { Component } from 'react';
import './App.css';
import Users from './users/Users';
import  userlist from './list/userlist';
import Parent from './components/parent';
import  Dropbox  from './dropbox/Dropdata';



class App extends Component {
  render() {
    return (
      <div>
        <Users></Users>.
        <Parent/>
        <userlist></userlist>
        <Dropbox/>
      </div>
    );
  }
}

export default App;
