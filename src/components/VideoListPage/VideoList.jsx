import React from 'react';
import { useState, useEffect } from 'react';
import { useVideoList } from '../../context/video-list-context'
import { VideoListCard } from './VideoListCard';
import { useLike } from '../../context/like-context';
import { useWatchLater } from '../../context/watch-later-context';

export const VideoList = () => {
    
    const {videoList} = useVideoList();
    console.log(videoList);
    const {likes} = useLike();
    const {watchLater} = useWatchLater();
     // console.log(item);
    // console.log("likes display " ,likes);
    // console.log("watchlate" ,watchLater)
    // console.log(likes.Like);
    const likeId = likes.Like.map((item) => item._id);
    const watchLaterId = watchLater.watchLater.map((item) =>item._id )
     
    console.log(likeId);


    const clickHandler = (event) => {
      setFilter(event.target.value);
      console.log(event.target.value);
    };
    const [filter, setFilter] = useState("ALL");
    const [filteredData, setFilteredData] = useState([]);
    useEffect((videoList) => {
      setFilteredData(
        videoList.filter((data) =>
          filter === "ALL"
            ? true
            : data.category.toLowerCase() === filter.toLowerCase()
        )
      );
    },[filter]);


  return (
    <>
      <div className="genre-button-container">
        <button
          className="genre-button"
          value="ALL"
          onClick={(e) => clickHandler(e)}
        >
          {" "}
          ALL
        </button>
        <button
          value="Indie"
          className="genre-button"
          onClick={(e) => clickHandler(e)}
        >
          Indie
        </button>
        <button
          value="Pop"
          className="genre-button"
          onClick={(e) => clickHandler(e)}
        >
          Pop
        </button>
        <button
          value="Background"
          className="genre-button"
          onClick={(e) => clickHandler(e)}
        >
          Background
        </button>
        <button
          value="Instrumental"
          className="genre-button"
          onClick={(e) => clickHandler(e)}
        >
          Instrumental
        </button>
        <button
          value="Hip Hop"
          className="genre-button"
          onClick={(e) => clickHandler(e)}
        >
          Hip-hop
        </button>
        <button
          value="Live"
          className="genre-button"
          onClick={(e) => clickHandler(e)}
        >
          Live
        </button>
      </div>
      <div className="main-container">
        {filteredData.map((item) => (
          <VideoListCard
            isLike={likeId.includes(item._id)}
            isWatchLater={watchLaterId.includes(item._id)}
            item={item}
            key={item._id}
          />
        ))}
      </div>
    </>
  );
}


