import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.movie.title}</h3>
				<p>{this.props.desc}</p>
			</div>
		);
	}
}

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
	}),
	desc: PropTypes.string,
};

Movie.defaultProps = {
	desc: "Description Not Available",
};

export default Movie;