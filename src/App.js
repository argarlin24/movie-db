import React, { Component } from "react";
import "./App.css";

import Movie from "./Movie";

class App extends Component {
	state = {
		movies: [],
	};

	async componentDidMount() {
		try {
			const res = await fetch(
				"https://api.themoviedb.org/3/discover/movie?api_key=dca6ba47ee045002b2c647232f48e550",
			);
			const movies = await res.json();
			console.log(movies);
			this.setState({
				movies: movies.results,
			});
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>MovieDB</h1>
				</header>
				{this.state.movies.map(movie => (
					<Movie key={movie.id} movie={movie} desc={movie.overview} />
				))}
			</div>
		);
	}
}

export default App;
