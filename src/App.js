import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/Register'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Register}/>
      </HashRouter>
    </div>
  );
}

export default App;
