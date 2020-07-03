import React, {Component} from 'react';
import SingleBeer from './SingleBeer'
import {Link, Route, Switch} from 'react-router-dom'
import axios from 'axios'


class RandomBeer extends Component {

	state={

		randomBeer:{}
	}

	async componentDidMount(){
		let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers/random')

		this.setState({
			randomBeer: res.data
		})
	}


  render(){
  return (
    <div>
    <header>
    	<Link to="/">Home</Link>
    </header>
    <h2>Random Beer Component</h2>
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    	<img style={{width:'8vw', height:'13vh'}} src={this.state.randomBeer.image_url} />
    	<span>{this.state.randomBeer.name} {this.state.randomBeer.attenuation_level}</span>
    	<span>{this.state.randomBeer.tagline} {this.state.randomBeer.first_brewed}</span>
    	<span>{this.state.randomBeer.description}</span>
    	<span>{this.state.randomBeer.contributed_by}</span>
    </div>
    
    </div>
  );
}
}

export default RandomBeer;
