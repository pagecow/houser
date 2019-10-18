import React from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/wizard' component={Wizard}/>
      </Switch>
    </div>
  );
}

export default App;
