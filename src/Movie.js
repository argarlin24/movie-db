import React, { Component } from "react";
import PropTypes from "prop-types";

class Movie extends Component {
	render() {
		const { title, release_date, overview, poster_path } = this.props.movie;
		return (
			<div>
				<img
					src={`http://image.tmdb.org/t/p/w185//${poster_path}`}
					alt={title}
				/>
				<h3>{title}</h3>
				<p>Release Date: {release_date}</p>
				<p>{overview}</p>
			</div>
		);
	}
}

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
		release_date: PropTypes.string.isRequired,
		overview: PropTypes.string,
	}),
};

export default Movie;
