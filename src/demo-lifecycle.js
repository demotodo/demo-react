var React = require("react");
var ReactDOM = require("react-dom");

var ReactClass = React.createClass({
    getInitialState: function () {
        console.log("in getInitialState()")
        return {};
    },

    componentWillMount: function () {
        console.log("in componentWillMount()");
    },

    componentDidMount: function () {
        console.log("in componentDidMount()");
    },

    render: function () {
        console.log("in render()");
        return React.DOM.p(null, "demo lifecycle functions");
    },

    componentWillUnmount: function () {
        console.log("in componentWillUnmount()");
    }
});

ReactDOM.render(React.createElement(ReactClass), document.getElementById("react-application"));
