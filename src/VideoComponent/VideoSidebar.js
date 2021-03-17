import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import MessageSharpIcon from '@material-ui/icons/MessageSharp';
import ShareSharpIcon from '@material-ui/icons/ShareSharp';
function VideoSidebar({tlikes,tmessage,tshare}) {
    const [like,setlike] = useState(false);
const setLikes=()=>{
if(like){
setlike(false)
}else{
setlike(true)
}
}
  return (
    <div className="videosidebar">
      <div className="videosidebar_icon_text ">
          {like?(
              <FavoriteOutlinedIcon className="like-effect" fontSize="large" onClick={setLikes}></FavoriteOutlinedIcon>
          )
          :(
             <FavoriteBorderIcon  fontSize="large" onClick={setLikes}/> 
          )}
          <p>{like?tlikes+1:tlikes}</p>
      </div>
      <div className="videosidebar_icon_text">
          <MessageSharpIcon fontSize="large"></MessageSharpIcon>
          <p>{tmessage}</p>
      </div>
      <div className="videosidebar_icon_text">
          <ShareSharpIcon fontSize="large"></ShareSharpIcon>
          <p>{tshare}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
