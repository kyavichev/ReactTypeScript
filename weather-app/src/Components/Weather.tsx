
import React, { useState, useEffect } from 'react';
import Map from './Map';
import './Weather.css';


type Location = {lat: number, lng: number};


export default function Weather() {

	const [weather, setWeather] = useState<any>(null);
	const [city, setCity] = useState<string>('Berkeley,CA,US');
	const [location, setLocation] = useState<Location>({lat: -13, lng: 8});

	const fetchWeather = async () => {
		try {
		  	const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}`
		 	);
		  	const data = await response.json();
		  	setWeather(data);

			if(data.coord)
			{
				setLocation({lat: data.coord.lat, lng: data.coord.lon});
			}
		} catch (error) {
		  	console.error(error);
		}
	};


	useEffect(() => {
		fetchWeather();
	}, [city]);


	const handleCityChange = (event: any) => {
		setCity(event.target.value);
	};
	
	const handleSubmit = (event: any) => {
		event.preventDefault();
		fetchWeather();
	};


	const calculateCelsius = (kelvins: number) => {
		return Math.round((kelvins - 273.15) * 100) / 100;
	}

	const calculateFahrenheit = (kelvins: number) => {
		return Math.round(((kelvins - 273.15) * 1.8 + 32) * 100) / 100;
	}


	if (!weather) {
		return (
			<>
				<h1>Weather App</h1>
				<div>Loading...</div>;
			</>
		);
	}

	return (
		<>
			<div className='weather'>
				<h1>Weather App</h1>

				<form onSubmit={handleSubmit}>
        			<label htmlFor="city">City:</label>
        			<input
          				type="text"
          				id="city"
          				name="city"
          				value={city}
          				onChange={handleCityChange}
        			/>
        			<button type="submit">Submit</button>
      			</form>

				{ weather.message && <h2>{weather.message}</h2> }

				{ !weather.message && 
					<>
						<section className='weather_info'>
							<h2>{weather.name}</h2>
							<p>{weather.weather[0].description}</p>
							<p>Temperature: {calculateCelsius(weather.main.temp)}° ({calculateFahrenheit(weather.main.temp)}°F)</p>
							<p>Feels Like: {calculateCelsius(weather.main.feels_like)}° ({calculateFahrenheit(weather.main.feels_like)}°F)</p>
							<p>Humidity: {weather.main.humidity}</p>
						</section>
					</>
				}

				<Map lat={location.lat} lng={location.lng} />
			</div>
		</>
	);
};


