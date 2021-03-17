import React, { useState, useRef } from 'react'
import './VideoComponent.css'
import Footer from './Footer';
import VideoSidebar from './VideoSidebar';
function VideoComponent({src,tlikes,tmessage,tshare,channel,Vdescption,songName}) {
    const [isplaying,setisplaying] =useState(false);
    const videoRef = useRef(null)
    const playVideo =() =>{
        if(isplaying){
            videoRef.current.pause()
setisplaying(false);

        }else{
            videoRef.current.play()
setisplaying(true)
        }
    }
    return (
        <div className="videocomponent">
            <video className="video" 
            src={src}
            alt="" 
            onClick={playVideo}
           loop
            ref={videoRef}
            />
         <Footer channel={channel} Vdescption={Vdescption} songName={songName}/>
        <VideoSidebar tlikes={tlikes} tmessage={tmessage} tshare={tshare}/>
        </div>
    )
}

export default VideoComponent
