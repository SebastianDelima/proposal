import React from 'react';
import Home from './containers/Home.js';
import {Switch, Route} from 'react-router-dom';
import Caceria from './containers/Caceria';
import Camps from './containers/Camps';
import Safari from './components/Safari';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/caceria' component={Caceria}/>
      <Route exact path='/camps' component={Camps}/>
      <Route exact path='/safari/:id' component={Safari}/>
    </Switch>

  );
}

export default App;
