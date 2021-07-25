import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/Register'
import Home from './Components/Home';
import MyHome from './Components/myhome';
import Cart from './Components/cart'
import MyOrder from './Components/MyOrder';
function App() {
  if(localStorage.getItem("id") == null){
     return(
      <HashRouter>
      <Route exact path="/" component={MyHome}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/cart" component={Cart}/>
      </HashRouter>
     )
  }else{

    return (
      <HashRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/myorder" component={MyOrder}/>
      </HashRouter>
  );
  }
 
}

export default App;
