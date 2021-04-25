import React from 'react';

const Heading = (props) => {
    return(
        <div className="headerText">
            <h2>Weather Forcast</h2>
            <h4>{props.city} - {props.country}</h4> 
        </div>
    )
}

export default Heading;