import React, { Component } from "react";
import styled from "styled-components";
import Overdrive from "react-overdrive";
import { Poster } from "../elements/Poster";

const Poster_Path = "http://image.tmdb.org/t/p/w154//";
const BackDrop_Path = "http://image.tmdb.org/t/p/w1280//";

const MovieWrapper = styled.div`
	position: relative;
	padding-top: 50vh;
	background-size: cover;
	background: url(${props => props.backdrop}) no-repeat;
`;

const MovieInfo = styled.div`
	background: #fff;
	text-align: left;
	padding: 2rem 10%;
	display: flex;
	> div {
		margin-left: 20px;
	}
	img {
		position: relative;
		top: -5rem;
	}
`;

class MovieDetail extends Component {
	state = {
		movie: {},
	};

	async componentDidMount() {
		try {
			const res = await fetch(
				`https://api.themoviedb.org/3/movie/${
					this.props.match.params.id
				}?api_key=dca6ba47ee045002b2c647232f48e550`,
			);
			const movie = await res.json();

			this.setState({
				movie: movie,
			});
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		const { movie } = this.state;
		return (
			<MovieWrapper backdrop={`${BackDrop_Path}${movie.backdrop_path}`}>
				<MovieInfo>
					<Overdrive id={movie.title}>
						<Poster
							src={`${Poster_Path}${movie.poster_path}`}
							alt={movie.title}
						/>
					</Overdrive>
					<div>
						<h2>{movie.title}</h2>
						<h3>{movie.release_date}</h3>
						<p>{movie.overview}</p>
					</div>
				</MovieInfo>
			</MovieWrapper>
		);
	}
}

export default MovieDetail;
