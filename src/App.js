import React from 'react';
import Home from './containers/Home.js'
import {Switch, Route} from 'react-router-dom'
import Caceria from './components/Caceria'
import Camps from './components/Camps'
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/caceria' component={Caceria}/>
      <Route exact path='/camps' component={Camps}/>
    </Switch>

  );
}

export default App;
