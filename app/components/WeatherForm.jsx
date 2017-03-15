var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault();

        var location = this.refs.location.value;

        if(location.length > 0) {
            // Clear form
            this.refs.location.value = '';

            // Call parent onSearch
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
          <div>
              <form onSubmit={this.onFormSubmit}>
                  <input ref="location" type="text" placeholder="Enter city name"/>
                  <button type="submit">Get Weather</button>
              </form>
          </div>
        );
    }
});

module.exports = WeatherForm;