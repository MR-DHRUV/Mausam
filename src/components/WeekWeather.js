import React from 'react'
import { useState } from 'react'
import './weekWeather.css'

const WeekWeather = (props) => {

    const [show, setShow] = useState(false);


    const toggleHide = () => {

        if (show === false) {
            document.getElementById('mybtn1').style.border = '0px solid black'
            setShow(true);
            console.log('set true')
        }
        else {
            document.getElementById('mybtn1').style.border = '0px solid black'
            setShow(false);
            console.log('set false')


        }
    }




    return (
        <li className="active myweekitem">

            <div className="Weekvisible"><button className='mybtn temp weekdata bg-transparent h3' id='mybtn1' onClick={toggleHide}>  <div onClick={toggleHide} className="date">{props.date}</div></button>
                <div className="lnr lnr-moon condition weektemp mySpan">

                    <div className="temp weekdata h5">Min : {props.min} <sup> <small>0</small></sup> C</div>

                    <div className="temp weekdata h5">Max : {props.max} <sup> <small>0</small></sup> C</div>

                </div>
            </div>

            {show === true ?
                <div className="toggleHideBox">

                    <div className="iconNmain">
                        <img src={`http://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`} alt="NA" />
                        <h1 className='h1 myH1'>{props.weather[0].main}</h1>
                    </div>

                    <span className="lnr lnr-moon condition weektemp mySpan1">

                        <span className="temp weekdata h6">Min : {props.min}<sup><small>o</small></sup><span className="temp-type">C</span></span>

                        <span className="temp weekdata h6">Max : {props.max}<sup><small>o</small></sup><span className="temp-type">C</span></span>

                    </span>

                    <div className="allOtherInfo">
                        <div className="tempByTime">
                            <p className={window.innerWidth > 850 ? 'h5 tempByTimeLi' : 'h6 tempByTimeLi'}> Morning : {props.feels_like.morn} C</p>
                            <p className={window.innerWidth > 850 ? 'h5 tempByTimeLi' : 'h6 tempByTimeLi'}> Day : {props.feels_like.day} C</p>
                            <p className={window.innerWidth > 850 ? 'h5 tempByTimeLi' : 'h6 tempByTimeLi'}> Evening : {props.feels_like.eve} C</p>
                            <p className={window.innerWidth > 850 ? 'h5 tempByTimeLi' : 'h6 tempByTimeLi'}> Night : {props.feels_like.night} C</p>
                        </div>
                        <div className="tempByTime">
                            <p className={window.innerWidth > 850 ? 'h5 tempByTimeLi' : 'h6 tempByTimeLi'}> Humidity : {props.humidity}%</p>
                            <p className={window.innerWidth > 850 ? 'h5 tempByTimeLi' : 'h6 tempByTimeLi'}> Wind Speed : {props.wind_speed} m/s</p>
                            <p className={window.innerWidth > 850 ? 'h5 tempByTimeLi' : 'h6 tempByTimeLi'}> Pressure : {props.pressure} hpa</p>
                            <p className={window.innerWidth > 850 ? 'h5 tempByTimeLi' : 'h6 tempByTimeLi'}> Clouds : {props.clouds}</p>
                        </div>

                    </div>

                </div> : ''}



        </li>
    )
}

export default WeekWeather