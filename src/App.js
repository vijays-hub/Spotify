import { useEffect } from 'react';
import './App.css';
import Login from './Login/Login.jsx'
import { getTokenFromResponse } from './Spotify/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player/Player';
import { useStateValue } from './Store/stateProvider';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue()

  useEffect(() => {
    const hash = getTokenFromResponse()
    // Just to avoid name clash, declaring _token
    const _token = hash.access_token
    window.location.hash = ""

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      spotify.setAccessToken(_token)

      // Get the Logged In User!
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists
        })
      })

      spotify.getPlaylist('37i9dQZEVXcOCXLpZw8V8Y').then(response => {
        console.log('Disocver weekly ->', response)
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      })

    } else {
      console.log('Client Declined permissions!')
    }
  }, [])

  console.log('Current User 👱 ->', user)

  return (
    <div className="app">
      {token ? <Player spotify={spotify}></Player> : <Login></Login>}
    </div>
  );
}

export default App;
