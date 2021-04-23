import React from 'react';

const Forecast= (props) =>{
    return(
        <div>
            <p>
            City:   {props.city}
            </p>
            <p>
            Country: {props.country}
            </p>
            <p>
            Description:   {props.description}
            </p>
            Temp:      {props.temperature}
            <p>
            Humidity:   {props.humidity}
            </p>
                <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}></img>
        </div>
            
    )
}

export default Forecast;