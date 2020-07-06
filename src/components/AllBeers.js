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
	}

	displayBeers = () =>{
		return this.state.beers.map(eachBeer=>{
			return(
			<Link to={`/beers/${eachBeer.name}`}> <div style={{display:'flex', alignItems:'center', border:'1px solid grey'}}>	
			 
			<img className='all-beers-images' style={{margin:'10%'}} src={eachBeer.image_url}/>

			 <div style = {{paddingRight:'5%'}}>
			 <span style = {{fontSize:'1.1em', padding:'5%', position:'relative', bottom:'20px'}}> {eachBeer.name} </span>
			 <br/>
			 <span style = {{color:'grey', fontSize:'0.9em', padding:'5%', position:'relative', bottom:'5px'}}> {eachBeer.tagline} </span>
			 <br/>
			 <span> {eachBeer.contributed_by}; </span>
			 </div>

			 </div> </Link>
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
