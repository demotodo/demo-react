var React = require("react");
var ReactDOM = require("react-dom");

var reactClass = React.createClass({
    getInitialState: function () {
        return {
            isHeaderHidden: false,
            title: 'Stateful React Component'
        };
    },

    handleClick: function () {
        this.setState({
            isHeaderHidden: !this.state.isHeaderHidden
        });
    },

    render: function () {
        var header = React.DOM.h1({className: 'header'}, this.state.title);
        var button = React.DOM.button({className: 'button', onClick: this.handleClick}, 'Toggle header');

        if (this.state.isHeaderHidden) {
            return React.DOM.div(null, [button]);
        }
        return React.DOM.div(null, [button, header]);
    }
});

var reactComponent = React.createElement(reactClass);

ReactDOM.render(reactComponent, document.getElementById("react-application"));
