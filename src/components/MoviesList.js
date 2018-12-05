import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './MovieListItem';

// Sort movies Array
function sortMoviesArray(a, b) {
	if (parseInt(a.year) < parseInt(b.year)) return -1;
	if (parseInt(a.year) > parseInt(b.year)) return 1;
	return 0;
}

function MoviesList({ movies }) {
	movies.sort(sortMoviesArray);
	return <div className="movies-list">{movies.map((movie) => <ListItem movie={movie} key={movie.id} />)}</div>;
}

MoviesList.propTypes = {
	movies: PropTypes.array.isRequired
};

export default MoviesList;
