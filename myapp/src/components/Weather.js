import React from 'react';



class Weather extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        weatherData : [],
    
      };
    }

    componentDidMount() {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=f44ba4edb9eb14ab56a1cbe38cae3397`)
      .then(response => response.json())
        .then(response => {
          this.setState({
            weatherData: response.weather,
            degrees: response.main.temp,
            icon: response.weather[0].icon,
            data: response,
          })
        
        });
    }

render(){
 
//   console.log(this.state.weatherData)
//   console.log(this.state.degrees)
// console.log(this.state.data)

// Displays temperature
let temp = this.state.degrees;
let tempFar = Math.round(temp - 273.15);
// console.log(temp)

// Displays weather icon
let weatherIcon = this.state.icon;


console.log(weatherIcon)

    return (
      <div className="Weather">
        <img className="icon" alt="img" src={`http://openweathermap.org/img/wn/${this.state.icon}.png`}/>
        {this.state.weatherData.map((weather, index) => (
          <h2 key={weather}>{weather.description}</h2>
        ))}
      <h2>{tempFar} &deg;C</h2>
      </div>
      );
    }
  }

 

export default Weather;