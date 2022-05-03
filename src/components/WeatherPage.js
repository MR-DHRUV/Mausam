import React, { useState } from 'react'
import { useEffect } from 'react';
import HourlyWeather from './HourlyWeather';
import './Weatherpage.css'
import WeekWeather from './WeekWeather';
import Carousel from 'react-elastic-carousel';
import "react-multi-carousel/lib/styles.css";
import './weatherModes.css'

const rain = () => {
    let hrElement;
    let counter = 100;
    for (let i = 0; i < counter; i++) {
        hrElement = document.createElement("HR");
        if (i === counter - 1) {
            hrElement.className = "thunder";
        } else {
            hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
            hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
            hrElement.style.animationDelay = Math.random() * 5 + "s";
        }
        document.body.appendChild(hrElement);
    }

}


const WeatherPage = (props) => {
    const [temprature, setTemprature] = useState('');
    const [feelsLike, setFeelsLike] = useState('');
    const [weatherDescription, setWeatherDescription] = useState('Haze');
    const [tpressure, settpressure] = useState('');
    const [thumidity, setthumidity] = useState('');
    const [tclouds, settclouds] = useState('');
    const [tvisibility, settvisibility] = useState('');
    const [windSpeed, setwindSpeed] = useState('');
    const [windDirection, setwindDirection] = useState('');
    const [dewPoint, setdewPoint] = useState('');
    // const [tdate, settdate] = useState('');
    const [tsunset, settsunset] = useState('');
    const [tsunrize, settsunrize] = useState('');
    const [weekdata, setWeekdata] = useState([]);
    const [hourlyData, sethourlyData] = useState([]);
    const [icon, setIcon] = useState('');





    useEffect(() => {

        const data = async () => {
            const mydata = await props.weatherdata;
            const { current } = await mydata;
            const { daily } = await mydata;
            const { hourly } = await mydata;
            const { weather } = await current;


            const { temp, feels_like, pressure, humidity, clouds, visibility, wind_speed, wind_deg, sunrise, sunset, dew_point } = await current;
            const { main, icon } = await weather[0];


            // let today = new Date();
            // const monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            // let monthno = today.getMonth();

            // let month = monthname[monthno];
            // const date_constructor = today.getDate() + ', ' + month;

            const sunrizetime = new Date((sunrise * 1000));
            const sunrizetime_constructor = sunrizetime.getHours() + ':' + sunrizetime.getMinutes()
            settsunrize(sunrizetime_constructor)

            const sunsettime = new Date((sunset * 1000));
            const sunsettime_constructor = sunsettime.getHours() + ':' + sunsettime.getMinutes()
            settsunset(sunsettime_constructor)


            daily.shift();



            setTemprature(temp);
            setWeatherDescription(main);
            setFeelsLike(feels_like)
            settpressure(pressure);
            setthumidity(humidity);
            settclouds(clouds);
            settvisibility(visibility);
            setwindSpeed(wind_speed);
            setwindDirection(wind_deg);
            // settdate(date_constructor);
            setWeekdata(daily);
            sethourlyData(hourly);
            setdewPoint(dew_point);
            setIcon(icon);
        }

        data()

    }, [props.weatherdata])

    const breakPoints = [
        { width: 1, itemsToShow: 4 },
        { width: 550, itemsToShow: 6 },
        { width: 768, itemsToShow: 8 },
        { width: 1200, itemsToShow: 10 },
    ];




    return (
        <div >
            {
                weatherDescription === 'Snow' ? <><div class="snowflake">
                    ❅
                </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div><div class="snowflake">
                        ❅
                    </div></> : ''
            }
            {weatherDescription === 'Drizzle' || weatherDescription === 'Rain' || weatherDescription === 'Thunderstorm' ? rain() : ''}

            <p className="myNone">{weatherDescription ?  document.title = props.userLocation +' | '+ weatherDescription :''}</p>

            <div className={`weather-card ${weatherDescription === 'Clear' ? 'sunny' : weatherDescription === 'Clouds' ? 'cloudy' : weatherDescription === 'Drizzle' || weatherDescription === 'Rain' || weatherDescription === 'Thunderstorm' ? 'rain' : weatherDescription === 'Snow' ? 'snow' : weatherDescription === 'Dust' || weatherDescription === 'Sand' || weatherDescription === 'Haze' ? 'dust-haze-desert' : weatherDescription === 'Mist' || weatherDescription === 'Smoke' || weatherDescription === 'Fog' ? 'fog-mist-smoke' : ''}`} >




                <div className="top" id='mytop'>

                    <div className="wrapper">
                        <div className="datenloc">
                            <h3 className="location display-1">{props.userLocation}</h3>
                            <div className="latnlon">
                                <h3 className="location additionalInfo h5">Latitude : {props.weatherdata.lat}</h3>
                                <h3 className="location additionalInfo h5">Longitude : {props.weatherdata.lon}</h3>
                            </div>
                            {/* <h3 className="location h3">{tdate}</h3> */}
                        </div>
                        <div className="leftMain">
                            <div className="weatherMain">
                                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="NA" />
                                <h1 className="heading display-1">{weatherDescription}</h1>
                            </div>

                            <div className="temp">
                                <div className="tempHead">
                                    <span className="temp-value display-1">{temprature} </span>
                                    <span className="deg h1">&nbsp;0&nbsp;</span>
                                    <span className="temp-value display-1">C</span>
                                </div>
                                <h1 className='h2 myH2'>Real Feel : {feelsLike}</h1>
                            </div>

                        </div>





                    </div>
                    <div className="additional">

                        <h4 className="additionalInfo h5">Preasure : {tpressure} hPa</h4>
                        <h4 className="additionalInfo h5">Humidity : {thumidity} % </h4>


                        <h4 className="additionalInfo h5">Clouds : {tclouds} Okta</h4>
                        <h4 className="additionalInfo h5">Visibility : {tvisibility} m</h4>


                        <h4 className="additionalInfo h5">Wind Speed : {windSpeed} m/s 🧭 {windDirection}</h4>
                        <h4 className="additionalInfo h5">Dew Point : {dewPoint}</h4>



                        <h4 className="additionalInfo h5">Sunrize : {tsunrize} AM</h4>
                        <h4 className="additionalInfo h5">Sunset : {tsunset} PM</h4>




                    </div>

                </div>
                <h1 className='myHeading h2'>48 Hour Forecast</h1>
                <p className="center Swipe">Swipe ▶</p>
                <div className="hourlyWeather">

                    <Carousel breakPoints={breakPoints} enableSwipe={true} enableMouseSwipe={false} >
                        {hourlyData.map((element) => {
                            const hourdate = new Date(element.dt * 1000);
                            const hour = hourdate.getHours();


                            return <HourlyWeather key={element.dt} icon={element.weather[0].icon} weather={element.weather[0].main} temprature={element.temp} hour={hour} />
                        })}
                    </Carousel>

                </div>
                <h1 className='myHeading h2'>7 Day Forecast</h1>
                <div className="bottom">
                    <div className="wrapper">
                        <ul className="forecast">

                            {weekdata.map((element) => {

                                const weekdate = new Date(element.dt * 1000);
                                const days = ['Sunday', 'Monday', 'Tuesday', "Wednesday", 'Thursday', 'Friday', 'Saturday'];
                                const monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                                const today_month = weekdate.getMonth();
                                const today_day = (weekdate.getDay());
                                const weekdate_constructor = weekdate.getDate() + ', ' + monthname[today_month] + ', ' + days[today_day];

                                const { weather } = element;



                                return <WeekWeather key={element.dt} min={element.temp.min} max={element.temp.max} feels_like={element.feels_like} date={weekdate_constructor} weather={weather} wind_speed={element.wind_speed} humidity={element.humidity} pressure={element.pressure} clouds={element.clouds} />
                            })}




                        </ul>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default WeatherPage
