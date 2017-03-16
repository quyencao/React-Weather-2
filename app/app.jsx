var React = require("react");
var ReactDOM = require("react-dom");
var {Router, Route, IndexRoute, hashHistory} = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');

$(document).foundation();

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Weather}/>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
        </Route>
    </Router>
, document.getElementById("app"));

// React.createClass create new component
// React component must have return function
// ReactDOM.render use to render component to container
// Get props through this.props
// Default props using getDefaultProps method
// Use ref to get reference to input and get data
// Use onSubmit for event
// getInitialState to init state and access state through this.state
// setState to modify state + rerender part of DOM use that modify state
// State can change and maintain by Component, props can't change
// Presentation and container component