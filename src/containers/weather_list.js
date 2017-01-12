/*
Now we need to do our individual rows.  To do that, we have to get the data into this component
and we do that via Redux. three steps:
 - import connect function
 - define function mapStateToProps
 - pull weather data into container

*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart.js';

class WeatherList extends Component {
	renderWeather(cityData){
		const name = cityData.city.name
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		// React standard is for key to be in top-level element and be a unique identifier
		return (
			<tr key={name}>
				<td>{name}</td>
				<td><Chart data={temps} color="orange" /></td>
				<td><Chart data={pressures} color="green" /></td>
				<td><Chart data={humidities} color="black" /></td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature</th>
						<th>Pressure</th>
						<th>Humidity</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		);
	}
}
/*
// #2 => we are using 'weather' because we used 'weather' in our weather reducer (reducer_weather)
// This is what we are doing using ES5 syntax
function mapStateToProps(state) {
	return { weather: state.weather }
}

// If we are only taking one property, we can just put 'weather' in curly braces
function mapStateToProps( { weather }) {
	return { weather: weather }
}
*/
// We can do one more refactor => if the key and value are the same, we can just do 'weather'
function mapStateToProps( { weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);