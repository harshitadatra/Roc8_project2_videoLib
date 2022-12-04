import React from 'react'
import { useHistory } from '../../context/history-context';

export const HistoryCard = ({item}) => {

  return (
    <>
      <div className="like-container-card">
        <img className="like-container-card-image" src={item.thumbnail} />

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


