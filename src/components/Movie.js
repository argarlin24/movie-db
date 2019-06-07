import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Overdrive from "react-overdrive";

import { Poster } from "../elements/Poster";

const Poster_Path = "http://image.tmdb.org/t/p/w154//";

//Destructing props in the function parameters...
const Movie = ({ movie }) => (
	<Link to={`/${movie.id}`}>
		<Overdrive id={movie.title}>
			<Poster
				src={`${Poster_Path}${movie.poster_path}`}
				alt={movie.title}
			/>
		</Overdrive>
	</Link>
);

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
		release_date: PropTypes.string.isRequired,
		overview: PropTypes.string,
	}),
};

export default Movie;
