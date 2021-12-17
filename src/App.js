import React, { Component } from "react";
// import Search from "./components/Search";

// import SayHi, { SayHello } from "./components/WeatherItem";
// import fakeWeatherData from "./fakeWeatherData.json";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import clear from "./img/weather-icons/clear.svg";
import "./App.css";
          
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Zakaria Bashir"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <body>
          <header id="header">
            <input type="text" placeholder="Type in a city name"/>
            <button className="button">FIND WEATHER</button>
          </header>
          
          <div className="ALL">
            <div className="part1">
              <div>
                <img className="mainImage" src="https://placekitten.com/200/300" alt="mostlycloudy icon" height="202px" />
                <h3>overcast clouds</h3>
              </div>

              <div className="temp"><b>Temperature</b>&ensp;&ensp;10&deg; to 11 &#8451;</div>
              <div>
                <p className="humid"><b>Humidity</b>&ensp;&ensp;78%&ensp;&ensp;<b>Pressure</b>&ensp;&ensp;1008.48</p>
              </div>
      
            </div>
            <div className="weather_of_the_day">
              <div>
              <p>03:00</p>
              <img src='https://placekitten.com/200/300' alt="mostlycloudy icon" height="60px"/>
              <p>8&#8451;</p>
              </div>

              <div>
              <p>06:00</p>
              <img src="https://placekitten.com/200/300" alt="mostlycloudy icon" height="60px"/>
              <p>9&#8451;</p>
              </div>

              <div>
              <p>09:00</p>
              <img src="https://placekitten.com/200/300" alt="mostlycloudy icon" height="60px"/>
              <p>14&#8451;</p>
              </div>
              
              <div>
              <p>12:00</p>
              <img src="https://placekitten.com/200/300" alt="mostlycloudy icon" height="60px"/>
              <p>17&#8451;</p>
              </div>
              
              <div>
              <p>15:00</p>
              <img src="https://placekitten.com/200/300" alt="mostlycloudy icon" height="60px"/>
              <p>18&#8451;</p>
              
              </div>
              <div>
              <p>18:00</p>
              <img src="https://placekitten.com/200/300" alt="mostlycloudy icon" height="60px"/>
              <p>16&#8451;</p>
              </div>
              
              <div>
              <p>21:00</p>
              <img src="https://placekitten.com/200/300" alt="mostlycloudy icon" height="60px"/>
              <p>13&#8451;</p>
              </div>

            </div>
                
          </div>
        </body>
      </div>
    );
  }
}

export default App;