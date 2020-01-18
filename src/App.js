import React from 'react';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import {Route, Switch, Link} from 'react-router-dom'
import Search from './LandingPage/Search/Search'

function App() {
  return (
    <Switch>
      <Route path='/search' component={Search}/>
      <Route path='/' component={LandingPage}/>
    </Switch>
  );
}

export default App;
