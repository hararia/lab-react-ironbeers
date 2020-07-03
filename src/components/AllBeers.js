import React, {Component} from 'react';
import SingleBeer from './SingleBeer'
import {Link} from 'react-router-dom'
import axios from 'axios';



class AllBeers extends Component {

	state={
		beers:[]
	}

	async componentDidMount(){
		let res = await axios.get('https://ih-beers-api2.herokuapp.com/beers')

		this.setState({
			beers:res.data
		})
		console.log(this.state)
		console.log(this.props)
	}

	displayBeers = () =>{
		return this.state.beers.map(eachBeer=>{
			return(
			<div style={{display:'flex', alignItems:'center',justifyContent:'center', borderBottom:'1px solid grey'}}>	
			 
			<Link to={`/beers/${eachBeer.name}`}><img className='all-beers-images' src={eachBeer.image_url}/></Link>

			 <div>
			 <span style = {{fontSize:'1.2em'}}> {eachBeer.name} </span>
			 <br/>
			 <span style = {{color:'grey'}}> {eachBeer.tagline} </span>
			 <br/>
			 <span> {eachBeer.contributed_by} </span>
			 </div>

			 </div>
			 )
		})
	}

  render(){
  return (
    <div>
    <header>
    	<Link to="/">Home</Link>
    </header>
    <h2>All Beers Component</h2>
    {this.displayBeers()}
    </div>
  );
}
}

export default AllBeers;
