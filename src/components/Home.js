import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import AllBeersImage from '../beers.jpg'
import randomBeerImage from '../random-beer.jpg'
import newBeerImage from '../new-beer.jpg'



class Home extends Component {

  render(){
  return (
    <div>
    <h1>Home Page</h1>
    
    <div>
    <img className='beer-image' id="all-beers-image" src={AllBeersImage} alt="lots of beer"/>
    <Link to="all-beers">All Beers</Link>
    </div>

    <div>
    <img className='beer-image' id="random-beer-image" src={randomBeerImage} alt="smiley beer"/>
    <Link to="random-beer">Random Beer</Link>
    </div>

    <div>
    <img className='beer-image' id="new-beer-image" src={newBeerImage} alt="beer at a brewery"/>
    <Link to="new-beer">New Beer</Link>
    </div>

    
    </div>
  );
}
}

export default Home;
