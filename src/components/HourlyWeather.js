import React from 'react'
import './hourly.css'


const HourlyWeather = (props) => {



    return (
        
        <div className="myCard">
            <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="NA" />
            <div className="card-body">
                <p className="card-text mycenter heading h5">{props.hour}</p>
                <h5 className="card-title mycenter">{props.weather}</h5>
                <h5 className="card-title mycenter mt-3 fw-bold">{props.temprature} <sup>o</sup>C</h5>
            </div>
        </div>
    )
}

export default HourlyWeather