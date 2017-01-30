import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi( {
	clientId     : '55d581999ad94db49d244c800cd67511',
	clientSecret : '2e81f1f55cfb460dbfc1507f03e2d7d5',
	redirectUri  : 'https://spoterfy-63636.firebaseio.com/'
} );

export default spotifyApi;