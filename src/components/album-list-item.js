import React from 'react';

class AlbumListItem extends React.Component {

	renderArtists( artists ) {
		return artists.map( ( artist, index ) => {
			return (
				<li key={ index }>
					<a target="_blank">
						{ artist.name }
					</a>
				</li>
			);
		} );
	}

	render() {
		const { album, onAlbumSelect } = this.props;

		return (
			<li className="list-group-item" title={ `View ${ album.name } album` }
				onClick={ () => { onAlbumSelect( album ) } }>
				<img
					className="album-cover"
					src={ ( album.images[ 1 ] || { } ).url }
					width="100"
					height="100"
					role="presentation" />

				<div className="details">
					<h3>{ album.name }</h3>
					<ul className="artists">
						{ this.renderArtists( album.artists ) }
					</ul>
					<p>
						<a>{ album.name }</a>
					</p>
				</div>

				<div className="clear"></div>
			</li>
		);
	}
}

AlbumListItem.propTypes = {
	album: React.PropTypes.object.isRequired,
	onAlbumSelect: React.PropTypes.func.isRequired
};

export default AlbumListItem;