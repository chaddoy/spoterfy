// libraries
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

// helpers
import spotifyApi from './spotify-web-api';
import '../styles/style.css';

// components
import SearchBar from './components/search-bar';
import AlbumList from './components/album-list';
import AlbumDetails from './components/album-details';

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			albums        : [ ],
			selectedAlbum : { }
		};

		this.albumSearch( 'Rage Against the Machine' );
	}

	albumSearch( term ) {
		spotifyApi.search( term || 'Rage Against the Machine', [ 'album' ] )
			.then( ( data ) => {

				const albums        = data.body.albums.items;
				const selectedAlbum = albums[ 0 ] || { };
				this.setState( {
					albums,
					selectedAlbum
				} );

			}, ( err ) => {
				console.error( err );
			} );
	}

	render() {
		const albumSearch = _.debounce( (term) => { this.albumSearch( term ) }, 300 );

		return (
			<div className="container">
				<div className="header">
					<SearchBar onSearchTermChange={ albumSearch } />
				</div>
				<AlbumDetails album={ this.state.selectedAlbum } />
				<AlbumList
					onAlbumSelect={ ( selectedAlbum ) => { this.setState({ selectedAlbum }) } }
					albums={ this.state.albums } />
				<div className="clear"></div>
			</div>
		);
	}

}

ReactDOM.render( <App />, document.querySelector( '#root' ) );