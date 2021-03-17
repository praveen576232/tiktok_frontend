import React from "react";
import "./Footer.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
function Footer({ channel, Vdescption, songName }) {
  return (
    <div className="footer">
      <div className="footer_left">
        <p>@{channel}</p>
        <p>{Vdescption}</p>
        <div className="footer_icon">
          <MusicNoteIcon></MusicNoteIcon>
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{songName}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        alt=""
        className="footer_spin_disk"
        src="https://static.thenounproject.com/png/934821-200.png"
      ></img>
    </div>
  );
}

export default Footer;
