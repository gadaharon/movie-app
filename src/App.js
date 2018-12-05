import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, Switch } from 'react-router-dom';

// Components
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route path="/movies/:id" component={MovieDetails} />
					<Route path="/movies" component={Movies} />
					<Redirect from="/" to="/movies" />
				</Switch>
			</div>
		);
	}
}

export default App;
