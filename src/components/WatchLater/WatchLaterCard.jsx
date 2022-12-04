import React from 'react';
import { useWatchLater } from '../../context/watch-later-context';

 export const WatchLaterCard = ({item}) => {
    const {watchLater} = useWatchLater();
    console.log(watchLater.watchLater);
    
  return (
    <>
      <div className="like-container-card">
        <img
          alt="video-image"
          className="like-container-card-image"
          src={item.thumbnail}
        />

        <div className="video-name-details">
          <div className="video-name">{item.title}</div>
          <div className="video-details">
            <div className="video-artist">{item.creator}</div>
            <i class="fa-sharp fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </>
  );
}

