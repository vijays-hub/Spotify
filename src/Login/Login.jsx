import "./Login.css";
import { loginUrl1, loginUrl2 } from "../Spotify/spotify";
const Login = () => {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <a href={loginUrl1}>LOGIN WITH SPOTIFY</a>
      {/* <a href={loginUrl2}>LOGIN WITH SPOTIFY</a> */}
    </div>
  );
};

export default Login;
