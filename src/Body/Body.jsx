import { Favorite, MoreHoriz, PlayCircleFilled } from "@material-ui/icons";
import { useStateValue } from "../Store/stateProvider";
import "./Body.css";
import Header from "./Header";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }] = useStateValue();
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>

        {discover_weekly?.tracks.items.map((item) => {
          return <SongRow track={item.track} />;
        })}
      </div>
    </div>
  );
}

export default Body;
