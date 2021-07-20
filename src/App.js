import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/Register'
import Home from './Components/Home';
import MyHome from './Components/myhome';
function App() {
  if(localStorage.getItem("id") == null){
     return(
      <HashRouter>
      <Route exact path="/" component={MyHome}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      </HashRouter>
     )
  }else{

    return (
      <HashRouter>
        <Route exact path="/home" component={Home}/>
      </HashRouter>
  );
  }
 
}

export default App;
