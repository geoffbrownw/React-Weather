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
	<div>
	    <h3> Examples Component!</h3>
	    <p>Welcome to examples page</p>
	</div>
    )
};
module.exports = Examples;
