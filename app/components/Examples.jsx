var React = require('react');

// Can refactor if only render function

//var Examples = React.createClass({
//    render: function () {
//	return (
//	    <h3>Examples Components</h3>
//	)
//    }
//});

var Examples = (props) => {
    return (
	<h3> Examples Component!</h3>
    )
};
module.exports = Examples;
