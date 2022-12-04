import React from 'react'


export const HistoryCard = ({item}) => {

  return (
    <>
      <div className="like-container-card">
        <img alt ="video1" className="like-container-card-image" src={item.thumbnail} />

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


