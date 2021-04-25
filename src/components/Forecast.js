import React from 'react';
import '../App.css'
const Forecast= (props) =>{
    return(
        <div className="forcast">
            <div className="info">
                <ul>
                    <li>{props.description}</li>
                    <li>Temp - {props.temperature}</li>
                    <li>Humidity - {props.humidity}</li>
                    <li>Wind - {props.wind}</li>
                </ul>
                </div>
                <div className="forcast-icon">
                    <img className="icon" src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}></img>
                </div>
        </div>
        
            
    )
}

export default Forecast;