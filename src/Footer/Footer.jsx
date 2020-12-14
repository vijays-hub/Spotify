import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { PlaylistPlay, VolumeDown } from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Scam_1992_poster.png/250px-Scam_1992_poster.png"
          alt="Album Logo"
        />
        <div className="footer__songInfo">
          <h4>Scam 1992</h4>
          <p>Achint</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green"></ShuffleIcon>
        <SkipPreviousIcon className="footer__icon"></SkipPreviousIcon>
        <PlayCircleOutlineIcon
          fontSize="large"
          className="footer__icon"
        ></PlayCircleOutlineIcon>
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay></PlaylistPlay>
          </Grid>
          <Grid item>
            <VolumeDown></VolumeDown>
          </Grid>
          <Grid item xs>
            <Slider></Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
