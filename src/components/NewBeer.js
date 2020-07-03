import React, {Component} from 'react';
import {Link, Route, Switch} from 'react-router-dom'
import axios from 'axios'



class NewBeer extends Component {

	state={
		name: '',
		tagline: '',
		description: '',
		firstBrewed: '',
		brewersTips: '',
		attenuationLevel: '',
		contributed_by: ''
	
	}


handleSubmit = (e) =>{
	e.preventDefault()
	let newBeerObj = {
		name: this.state.name,
		tagline: this.state.tagline,
		description: this.state.description,
		first_brewed: this.state.first_brewed,
		brewers_tips: this.state.brewers_tips,
		attenuation_level: this.state.attenuation_level,
		contributed_by: this.state.contributed_by
	}

	console.log(newBeerObj)

	axios.post('https://ih-beers-api2.herokuapp.com/beers/new', newBeerObj)
}

handleChange = e => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render(){
  return (
    <div>
    <header>
    	<Link to="/">Home</Link>
    </header>
    <h2>New Beer</h2>
    <form style={{display:'flex', flexDirection:'column'}} onSubmit={this.handleSubmit}>
    	<label>
    	Name:
            <input onChange={this.handleChange} name="name" type="text" />
        </label>    
        <label>
        Tagline:
            <input onChange={this.handleChange} name="tagline" type="text" />
        </label>
        <label>
        Description:    
            <input onChange={this.handleChange} name="description" type="text" />
        </label> 
        <label>
        First Brewed:    
            <input onChange={this.handleChange} name="first_brewed" type="text" />
        </label>  
        <label>
        Brewers Tips:    
            <input onChange={this.handleChange} name="brewers_tips" type="text" />
        </label>
        <label>
        Attenuation Level:    
            <input onChange={this.handleChange} name="attenuation_level" type="text" />
        </label>  
        <label>
        Contributed By:    
            <input onChange={this.handleChange} name="contributed_by" type="text" />
        </label>       

            <input type="submit" />
          </form>
    </div>
  );
}
}

export default NewBeer;
