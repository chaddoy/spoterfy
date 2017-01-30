import React from 'react';

class AlbumDetails extends React.Component {

	render() {
		const { album } = this.props;

		return (
			<div className="album-details">
				<iframe
					src={ `https://embed.spotify.com/?uri=${ album.uri }` }
					frameBorder="0"
					width="300" height="400"
					allowTransparency="true"></iframe>
			</div>
		);
	}

}

AlbumDetails.propTypes = {
	album: React.PropTypes.object.isRequired
};

export default AlbumDetails;