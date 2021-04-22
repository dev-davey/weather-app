import React from 'react';

const Form = (props) => {
    return(
        <form>
            <input type="text" name="city" placeholder="Choose Your City"/>
            <input type="text" name="country" placeholder="Choose Your Country"/>
            <button id="submit-btn">Get Weather</button>
        </form>
    )
}

export default Form;