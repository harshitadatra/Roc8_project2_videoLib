import React from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../SideBar/Sidebar';
import { useSingleVideo } from '../../context/video-list-context';
import { useWatchLater } from '../../context/watch-later-context';
import { useLike } from '../../context/like-context';
import { useAuth } from '../../context/auth-context';
export const VideoPlay = ({item}) => {
  const {videoId} = useParams();
  
    const videoObj = useSingleVideo(videoId);
     const { setLike } = useLike();
     const { setWatchLater } = useWatchLater();
     const { user } = useAuth();

  console.log(videoObj);
  const likeHandler = async () => {
    try {
      const likeResponse = await axios({
        method: "post",
        url: "/api/user/likes",
        headers: { authorization: user.token },
        data: { video: item },
      });
      console.log(likeResponse);
      setLike({ Like: likeResponse.data.likes });
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const removeLikeHandler = async () => {
    try {
      const removeLikeResponse = await axios({
        method: "delete",
        url: `/api/user/likes/${item._id}`,
        headers: { authorization: user.token },
        data: { video: item },
      });
      console.log(removeLikeResponse.data.likes);
      setLike({ Like: removeLikeResponse.data.likes });
    } catch (error) {
      console.log(error);
    }
  };

  const watchHandler = async () => {
    try {
      const watchLaterData = await axios({
        method: "post",
        url: `/api/user/watchlater`,
        headers: { authorization: user.token },
        data: { video: item },
      });
      console.log(watchLaterData);
      setWatchLater({ watchLater: watchLaterData.data.watchlater });
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const removeWatchHandler = async () => {
    try {
      const removeWatchResponse = await axios({
        method: "delete",
        url: `/api/user/watchlater/${item._id}`,
        headers: { authorization: user.token },
        data: { video: item },
      });
      setWatchLater({ watchLater: removeWatchResponse.data.watchlater });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="video-play-main-container">
        <Sidebar />
        <div className="video-play-card-container">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div class="video-play-contaier-details">
            <div class="video-category">#indie</div>
            <div className='video-name'> video name</div>
            <div className="video-play-container-icons">
              <div onclick={likeHandler}class="icon-container">
                <i class="fa fa-duotone fa-thumbs-up"></i>
                <div class="icon-name">LIKE</div>
              </div>
              <div o class="icon-container">
                <i class="fa fa-solid fa-clock"></i>
                <div class="icon-name">WATCH LATER</div>
              </div>
              <div class="icon-container">
                <i class="fa-solid fa-share-nodes"></i>
                <div class="icon-name">SHARE</div>
              </div>
              <div class="icon-container">
                <i class="fa-solid fa-folder-plus"></i>
                <div class="icon-name">PLAYLIST</div>
              </div>
            </div>
            <div className='artist-name'>Artist: artist</div>
          </div>
        </div>
      </div>
    </div>
  );
}

