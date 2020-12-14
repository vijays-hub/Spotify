import Body from "../Body/Body";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import "./Player.css";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar></Sidebar>
        <Body spotify={spotify}></Body>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Player;
