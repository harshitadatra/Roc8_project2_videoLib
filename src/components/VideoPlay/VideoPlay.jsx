import React from 'react'
import { useParams } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';

export const VideoPlay = () => {
  const {videoId} = useParams();
  console.log(videoId)
  return (
    <div>
      <Navbar/>
     
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}


