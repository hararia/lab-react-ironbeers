import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom'
import AllBeers from './components/AllBeers'
import NewBeer from './components/NewBeer'
import RandomBeer from './components/RandomBeer'
import SingleBeer from './components/SingleBeer'
import Home from './components/Home'

class App extends Component {
  render(){
  return (
    <div className="App">

    <Switch>
    <Route exact path='/' render={()=><Home/>}/>
    <Route exact path='/all-beers' render={(props)=><AllBeers/>}/>
    <Route exact path='/random-beer' render={()=><RandomBeer/>}/>
    <Route exact path='/new-beer' render={()=><NewBeer/>}/>
    <Route
              exact
              path="/beers/:id"
              render={(props) => <SingleBeer  {...props} />}
            />
     

    </Switch>
    </div>
  );
}
}

export default App;
