let userAccessToken;
const spotifyClientId = 'b8d0694339774cd49ba515e90f238977';
const spotifyAuthEndpoint = 'https://accounts.spotify.com/authorize';
const spotifyRediretURI = 'http://localhost:3000/';
const spotifyRequestURI = 'https://api.spotify.com/v1/';
const cors = 'https://cors-anywhere.herokuapp.com/';


const Spotify = {
        getAccessToken() {
            if (userAccessToken) {
                // return new Promise(resolve => resolve(userAccessToken));
                console.log(`Using old token ${userAccessToken}`);
                return userAccessToken;
            }

            const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
            const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

            if (accessTokenMatch && expiresInMatch) {
                userAccessToken = accessTokenMatch[1];
                const expiresIn = Number(expiresInMatch[1]);
                window.setTimeout(() => userAccessToken = '', expiresIn * 1000);
                window.history.pushState('Access Token', null, '/');
                console.log(`New Token received ${userAccessToken}`);
                return userAccessToken;
            } else {
                const accessURI = spotifyAuthEndpoint +
                "?client_id=" + spotifyClientId +
                "&redirect_uri=" + spotifyRediretURI +
                "&scope=playlist-modify-public" +
                "&response_type=token";
                console.log(`Redirecting to Sporify ${accessURI}`);
                window.location = accessURI;
            }
        },
        search(term) {
            const userAccessToken = Spotify.getAccessToken();
            const urlToFetch = spotifyRequestURI + "search?type=track&q=" + term;
            return fetch(urlToFetch, {
                    headers: {
                        Authorization: 'Bearer ' + userAccessToken,
                    }
                }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                    if (jsonResponse.tracks) {
                        return jsonResponse.tracks.items.map(track => (
                            {
                                id: track.id,
                                name: track.name,
                                artist: track.artists[0].name,
                                album: track.album.name,
                                uri: track.uri,
                            })
                        );
                    } else {
                        return [];
                    }
                }
            )
        },
    }
;

export default Spotify;