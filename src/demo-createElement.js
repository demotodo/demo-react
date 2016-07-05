var React = require("react");
var ReactDOM = require("react-dom");

var h1 = React.DOM.h1({className: "header", key: "header"}, 'This is React');
var p = React.DOM.p({className: "content", key: "content"}, "And that's how it works.");

var section = React.createElement("section", {className: "container"}, [h1, p]);

ReactDOM.render(section, document.getElementById("react-application"));
