import React, { useEffect, useState } from 'react';
import './App.css';
import VideoComponent from './VideoComponent/VideoComponent';
import axios from './axios'
function App() {
  const [videos ,setVideos]=useState([]);
  useEffect(() => {
    const featchdata = async() =>{
   const response = await axios.get('/v1/video/poast');
   if(response){
  setVideos(response.data);

   }
   return response;
    }
    featchdata();
  }, [])
  return (
    <div className="app">
      <div className="app_video">
    {
      videos && videos?.map(video =>
        (
          <VideoComponent 
          key={video?._id} 
          src={video?.videoSrc} 
          channel={video?.channel} 
          Vdescption={video?.video_desc} 
          songName={video?.songName} 
          tlikes={parseInt( video?.tlikes)} 
          tmessage={parseInt(video?.tmessage)} 
          tshare={parseInt(video?.tshare)}/>
        ))
    }
      
  
    
        </div>
    </div>
  );
}

export default App;
