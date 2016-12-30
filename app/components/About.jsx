var React = require('react');

// Dont maintain state and only contain redner can refactor
//var About = React.createClass({

//    render: function () {
//	return (
//	    <h3>About Components</h3>
//	)
//    }
// });

var About = (props) => {
    return (
	<h3>About Component</h3>
    )
};

module.exports = About;
