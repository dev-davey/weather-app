import React, { Component } from 'react'
import Heading from './components/Heading'
import Forcast from './components/Forecast'
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchCity: "",
      searchCountry: "",
      city: "",
      country: "",
      temperature: "",
      description: "",
      humidity: "",
      wind: "",
      icon: "",
      error: ""
    }
  }

  componentDidMount(){
   this.performFirstSearch()
  }

  performFirstSearch = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=New York,United States&APPID=36dbd4f4d180c0a6ea3f797fe7c0402d`)
    .then(response => response.json())
    .then(data => {
    this.setState({
      temperature: Math.floor((data.main.temp -273.15) * 1.8 + 32),
      description: data.weather[0].description,
      city: data.name,
      humidity: data.main.humidity,
      country: data.sys.country,
      icon: data.weather[0].icon,
      wind: data.wind.speed
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    });
  }

  //async api call
  performSearch = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchCity},${this.state.searchCountry}&APPID=36dbd4f4d180c0a6ea3f797fe7c0402d`)
    .then(response => response.json())
    .then(data => {
    this.setState({
      temperature: Math.floor((data.main.temp -273.15) * 1.8 + 32),
      description: data.weather[0].description,
      city: data.name,
      humidity: data.main.humidity,
      country: data.sys.country,
      icon: data.weather[0].icon,
      wind: data.wind.speed
      })
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error)
    });
  }
  
  

  handleSubmit = (event) =>{
    event.preventDefault()
    this.performSearch();
   
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    return (
      <div className="container">
        <Heading city={this.state.city}  country={this.state.country}/>

          <div className="formStyle">
            <form>
                <input type="text" name='searchCity' onChange={this.handleInputChange} placeholder="Choose Your City"/>
                <input type="text" name='searchCountry' onChange={this.handleInputChange}  placeholder="Choose Your Country"/>
                <button id="submitBtn" type="submit" onClick={this.handleSubmit}>Get Weather</button>
                <h3>{this.state.error}</h3>
            </form>
          </div>
          <div>
            <Forcast city={this.state.city} description={this.state.description} temperature={this.state.temperature} humidity={this.state.humidity} icon={this.state.icon} searchCountry={this.state.searchCountry} wind={this.state.wind}/>
            </div>
      </div>
    )
  }
}


