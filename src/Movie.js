import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
	render() {
		return (
			<div>
				<h3>{this.props.movie.title}</h3>
			</div>
		);
	}
}

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
	}),
};

export default Movie;
