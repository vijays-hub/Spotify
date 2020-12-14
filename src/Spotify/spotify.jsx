// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";
const clientID = "7110a3a4fd81498db4ff20ef01a213ab";

// Scopes
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// Access Token
export const getTokenFromResponse = () => {
  // See the access token recieved from spotify to figure out what we are doing here.
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initialValue, item) => {
      let parts = item.split("=");
      initialValue[parts[0]] = decodeURIComponent(parts[1]);
      return initialValue;
    }, {});
};

export const loginUrl1 = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20" // 20 ---> ASCII of 'space' character
)}&response_type=token&show_dialog=true`;
