import React from 'react';

import AlbumListItem from './album-list-item';

class AlbumList extends React.Component {

	renderAlbumItems( albums ) {
		return albums.map( ( album, index ) => {
			return (
				<AlbumListItem
					key={ index }
					album={ album }
					onAlbumSelect={ this.props.onAlbumSelect } />
			);
		} );
	}

	renderEmptyMsg() {
		return (
			<li className="list-group-item">
				<center>No albums or artists available.</center>
			</li>
		);
	}

	render() {
		const { albums } = this.props;

		return (
			<ul className="list-group col-md-4">
				{ albums.length ? this.renderAlbumItems( albums ) : this.renderEmptyMsg() }
			</ul>
		);
	}

}

AlbumList.propTypes = {
	albums: React.PropTypes.array.isRequired,
	onAlbumSelect: React.PropTypes.func.isRequired
};

export default AlbumList;