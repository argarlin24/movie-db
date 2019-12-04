import React, { PureComponent } from "react";
import styled from "styled-components";
import Movie from "./Movie";

const MovieGrid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(6, 1fr);
	grid-row-gap: 1rem;

	@media (max-width: 1200px) {
		grid-template-columns: repeat(3, 1fr);
		padding: 0.5rem;
		grid-row-gap: 0.5rem;
	}

	@media (max-width: 414px) {
		grid-template-columns: repeat(2, 1fr);
		padding: 0.5rem;
		grid-row-gap: 0.5rem;
	}
`;

class MoviesList extends PureComponent {
	state = {
		movies: [],
	};

	async componentDidMount() {
		try {
			const res = await fetch(
				"https://api.themoviedb.org/3/discover/movie?api_key=dca6ba47ee045002b2c647232f48e550",
			);
			const movies = await res.json();

			this.setState({
				movies: movies.results,
			});
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<MovieGrid>
				{this.state.movies.map(movie => (
					<Movie key={movie.id} movie={movie} />
				))}
			</MovieGrid>
		);
	}
}

export default MoviesList;
