import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class MovieDetails extends Component {
	state = {
		movie: {}
	};

	componentDidMount() {
		const id = this.props.match.params.id;
		axios
			.get(`http://x-mode.co.il/exam/descriptionMovies/${id}.txt`)
			.then((res) => this.setState({ movie: res.data }))
			.catch((err) => console.log(err));
	}
	render() {
		const { movie } = this.state;
		console.log(movie);
		return (
			<div style={{ paddingTop: 30 }}>
				<Link to="/movies" className="back-button">
					Bakck To Movies
				</Link>
				<div className="movie-card">
					<div className="card">
						<img src={movie.imageUrl} alt={movie.name} />
						<div style={{ flexGrow: 2 }}>
							<h1 style={{ textAlign: 'center' }}>{movie.name}</h1>
							<ul style={{ listStyle: 'none', textAlign: 'center' }}>
								<li style={{ margin: '1rem 0' }}>Category: {movie.category}</li>
								<li style={{ margin: '1rem 0' }}>Rating: {movie.rate}</li>
								<li style={{ margin: '1rem 0' }}>Year: {movie.year}</li>
							</ul>
						</div>
					</div>
					<h2>Plot</h2>
					<p>{movie.description}</p>
					{movie.imageUrlArr ? (
						movie.imageUrlArr.map((image, i) => (
							<img
								key={i}
								src={image}
								alt={movie.name}
								style={{ height: 100, width: 100, marginRight: '5px' }}
							/>
						))
					) : null}
					<br />
					{movie.promoUrl !== '' ? (
						<a className="button" href={movie.promoUrl}>
							<span style={{ color: '#fff' }}>Watch Promo</span>
						</a>
					) : null}
				</div>
			</div>
		);
	}
}

export default MovieDetails;
