var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application build on React.</p>
            <p>
                Here is some tool I use:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This is a javascript framework
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - I used OpenWeatherMap to fetch weather
                </li>
            </ul>
        </div>
    );
}

module.exports = About;