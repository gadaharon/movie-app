import React, { Component } from 'react';

// Components
import SearchBar from './SearchBar';
import MoviesList from './MoviesList';
import axios from 'axios';

export class Movies extends Component {
	state = {
		moviesArray: [],
		moviesToShow: []
	};
	componentDidMount() {
		axios
			.get('http://x-mode.co.il/exam/allMovies/allMovies.txt')
			.then((res) => {
				this.setState({ movies: res.data.movies, moviesToShow: res.data.movies });
			})
			.catch((err) => console.log(err));
	}

	//  Search Movies
	onSearchHandler = (name) => {
		const { movies } = this.state;
		let moviesArr = [];
		if (name === '') {
			return this.setState({ moviesToShow: movies });
		}
		movies.forEach((movie) => {
			if (movie.name.toLowerCase().includes(name.toLowerCase())) {
				moviesArr.push(movie);
			}
		});
		this.setState({ moviesToShow: moviesArr });
	};
	render() {
		return (
			<div>
				<SearchBar search={this.onSearchHandler} />
				<MoviesList movies={this.state.moviesToShow} />
			</div>
		);
	}
}

export default Movies;
