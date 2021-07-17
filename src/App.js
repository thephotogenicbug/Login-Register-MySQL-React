import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/Register'
import Home from './Components/Home';
function App() {
  return (
      <HashRouter>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Register}/>
        <Route exact path="/home" component={Home}/>
      </HashRouter>
  );
}

export default App;
