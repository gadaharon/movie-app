import React, { Component } from 'react';

export class SearchBar extends Component {
	state = {
		movieName: ''
	};

	onChangeHandler = (e) => {
		this.setState({ movieName: e.target.value });
	};
	render() {
		return (
			<div className="search-bar">
				<h1 style={{ color: '#fff', textAlign: 'center' }}>Search For Movies</h1>
				<div style={{ width: '50%', margin: '0 auto' }}>
					<input type="text" onChange={this.onChangeHandler} placeholder="Search Movies" />
					<br />
					<button onClick={() => this.props.search(this.state.movieName)} style={{ marginTop: 15 }}>
						Search
					</button>
				</div>
			</div>
		);
	}
}

export default SearchBar;
