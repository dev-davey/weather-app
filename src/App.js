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
  //async api call
  async componentDidMount() {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchCity},${this.state.searchCountry}&APPID=36dbd4f4d180c0a6ea3f797fe7c0402d`
    const response = await fetch(url)
    const data = await response.json();
    //setting states to search results
    if(this.state.searchCity && this.state.searchCountry){
    this.setState({temperature: data.main.temp})
    this.setState({description: data.weather[0].description})
    this.setState({city: data.name})
    this.setState({humidity: data.main.humidity})
    this.setState({country: data.sys.country})
    this.setState({icon: data.weather[0].icon})
    this.setState({wind: data.wind.speed})
    console.log(data)}
    else{
      this.setState({
        error: ""
      })
    }
  }
  
  

  handleSubmit = (event) =>{
    event.preventDefault()
    this.componentDidMount();
   
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


