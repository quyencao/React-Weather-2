var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeatherMap = require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
   getInitialState: function () {
        return {
            isLoading: false
        }
   },
   handleSearch: function (location) {

       this.setState({
           isLoading: true,
           errorMessage: undefined
       });

       OpenWeatherMap.getTemp(location).then((temp) => {
           this.setState({
               location: location,
               temp: temp,
               isLoading: false
           });
       }, (e) => {
          this.setState({
              isLoading: false,
              errorMessage: e.message
          })
       });
   },
   render: function () {

       var {location, temp, isLoading, errorMessage} = this.state;

       function renderMessage() {
           if (isLoading) {
               return (
                    <h3 className="text-center">Fetching Weather...</h3>
               )
           } else if (temp && location) {
               return (
                   <WeatherMessage location={location} temp={temp}/>
               )
           }
       }

       function renderError() {
           if (typeof errorMessage === "string") {
               return (
                   <ErrorModal message={errorMessage}/>
               )
           }
       }

       return (
         <div>
             <h1 className="text-center">Get Weather</h1>
             <WeatherForm onSearch={this.handleSearch}/>
             {renderMessage()}
             {renderError()}
         </div>
       );
   }
});

module.exports = Weather;