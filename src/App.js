import React, { Component } from 'react'
import Form from './components/Form'
import Heading from './components/Heading'
import Forcast from './components/Forecast'

export default class App extends Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    base: "",
    icon: "",
    description: "",
    error: ""
  }
  
  async getData() {
    const url = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=36dbd4f4d180c0a6ea3f797fe7c0402d"
    const apiCall = await fetch(url)
    const response = await apiCall.json();
    console.log(response)
    //this.setState({
      //base: this.state.base = response.base
    //})
  }
    

  render() {
    return (
      <div>
        <Heading/>
        <Form />
        <Forcast/>
      </div>
    )
  }
}


