import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieListItem({ movie }) {
	return (
		<div className="movie-list-item">
			<h3 style={{ color: '#d6d1d1', textAlign: 'center' }}>{movie.name}</h3>
			<p style={{ color: '#d6d1d1' }}>Category: {movie.category}</p>
			<p style={{ color: '#d6d1d1' }}>Release Year: {movie.year}</p>
			<Link to={`/movies/${movie.id}`} className="button">
				<span style={{ color: '#fff' }}>Movie Details</span>
			</Link>
		</div>
	);
}

MovieListItem.propTypes = {
	movie: PropTypes.object.isRequired
};

export default MovieListItem;
