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

    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
    	<img style={{width:'8vw', height:'13vh'}} src={this.state.beer.image_url} />
    	<span>{this.state.beer.name} {this.state.beer.attenuation_level}</span>
    	<span>{this.state.beer.tagline} {this.state.beer.first_brewed}</span>
    	<span>{this.state.beer.description}</span>
    	<span>{this.state.beer.contributed_by}</span>
    </div>
    
    </div>
  );
}
}

export default SingleBeer;
