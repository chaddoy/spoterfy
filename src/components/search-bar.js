import React from 'react';

class SearchBar extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	}

	onInputChange( term ) {
		this.setState( { term } );
		this.props.onSearchTermChange( term );
	}

	render() {
		return (
			<div className="search-bar">
				<span className="logo">Spoterfy</span>
				<input
					value={ this.state.term }
					onChange={ ( event ) => this.onInputChange( event.target.value ) }
					placeholder="Search for an artist or album..." />
			</div>
		);
	}

}

SearchBar.propTypes = {
	onSearchTermChange: React.PropTypes.func.isRequired
};

export default SearchBar;
