import React from 'react'
// import Hero from './components/Hero';
import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { useEffect } from 'react';
import WeatherPage from './components/WeatherPage';
import Hero1 from './components/Hero1';


function App() {

  const [city, setCity] = useState('');
  const [coordinates, setCoordinates] = useState({ lat: '', lon: '' });
  const [weather, setWeather] = useState({});
  const [successLocation, setSuccessLocation] = useState(false);
  const [userLocation, setUserLocation] = useState('');

  let citystateupdater = (cityName) => {
    setCity(cityName);
  }
 
 
  const location = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_KEY1}`
    const response = await fetch(url);
    const data = await response.json();
    if (data) {

      try {

        if (data.coord.lat !== undefined) {
          setSuccessLocation(true);
          setCoordinates({ lat: data.coord.lat, lon: data.coord.lon })
          setUserLocation(`${data.name}, ${data.sys.country}`)
          
        }
        else {
          setCoordinates({ lat: '', lon: '' })
          response.json("city not found");
          console.log("city not found");

        }
        return data.coord.lat
      }

      catch (error) {
        console.log(error);
      }
    }

  }





  useEffect(() => {
    const getWeather = async () => {
      if (coordinates.lat === undefined) {
        console.log("Location not found");
      }
      else {

        try {
          const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.REACT_APP_KEY1}&exclude=minutely&units=metric`

          const response = await fetch(url);
          const data = await response.json();
          setWeather(data);
        }
        catch (error) {
          console.log(error);
        }

      }
    }
    getWeather()

  }, [coordinates]);



 

  return (
    <Router>
      <Navbar city={city}  />

      <Switch>
        <Route exact path='/'> <Hero1 city={city} updater={citystateupdater} location={location} coordinates={coordinates}/> </Route>
        <Route exact path='/Now'> <WeatherPage location={coordinates} success={successLocation} weatherdata={weather} userLocation={userLocation} /> </Route>
      </Switch>

    </Router>
  );
}

export default App;
