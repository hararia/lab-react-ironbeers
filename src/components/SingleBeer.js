import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import axios from 'axios'


class SingleBeer extends Component {


	state={

		beer:{}
	}

	async componentDidMount(){
		let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers')

		let currentBeer = res.data.find((item) => {
			return item.name==this.props.match.params.id
		})

		this.setState({
			beer:currentBeer
		})
	}

  render(){
  return (
    <div>
    <header>
    	<Link to="/">Home</Link>
    </header>

    <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', position:'relative', top:'50px'}}>
    	<img style={{width:'15vw', height:'30vh', margin:'auto'}} src={this.state.beer.image_url} />
    	<div style={{margin:'10px'}}><span style={{margin:'30%'}}>{this.state.beer.name}</span> <span>{this.state.beer.attenuation_level}</span></div>
    	<span style={{margin:'10px'}}>{this.state.beer.tagline} {this.state.beer.first_brewed}</span>
    	<span style={{margin:'10px'}}>{this.state.beer.description}</span>
    	<span style={{margin:'10px'}}>{this.state.beer.contributed_by}</span>
    </div>
    
    </div>
  );
}
}

export default SingleBeer;
