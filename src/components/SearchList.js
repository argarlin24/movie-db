import React, { PureComponent } from "react";
import styled from "styled-components";
import Movie from "./Movie";

class SearchList extends PureComponent {
	state = {
		movies: [],
	};

	async componentDidMount() {
		console.log(this.props);
		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/search/movie?api_key=dca6ba47ee045002b2c647232f48e550&query=${
					this.props.match.params.term
				}`,
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

export default SearchList;

const MovieGrid = styled.div`
	display: grid;
	padding: 1rem;
	grid-template-columns: repeat(6, 1fr);
	grid-row-gap: 1rem;
`;