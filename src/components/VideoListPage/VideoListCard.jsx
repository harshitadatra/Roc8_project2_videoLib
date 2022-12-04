import React from 'react';
// import { videos } from '../../backend/db/videos';
import axios from "axios";
import { useAuth } from '../../context/auth-context';
import { useLike } from '../../context/like-context';
import { useWatchLater } from '../../context/watch-later-context';
import { useHistory } from '../../context/history-context';
import { useNavigate } from 'react-router-dom';

// import { useAuth } from '../../context/auth-context';
export const VideoListCard = ({item,isLike,isWatchLater}) => {
    // console.log(videos);
    // console.log("item video card" ,item);
    const navigate = useNavigate();
    const {user} = useAuth();
    // console.log("user video card", user);
    const {setLike} = useLike();
    const {setWatchLater} = useWatchLater();
    const {setHistory} = useHistory();



      


   const likeHandler = async () => 
   { 
       try{
        const likeResponse = await axios({
          method:"post",
          url:"/api/user/likes",
          headers:{authorization: user.token},
          data:{video:item},
        });
        console.log(likeResponse);
         setLike({ Like: likeResponse.data.likes });
      }
        catch(error)
        {
          console.log(error.response.data);
        }
    }
    const removeLikeHandler = async () => {
      try {
        const removeLikeResponse = await axios({
          method:"delete",
          url:`/api/user/likes/${item._id}`,
          headers:{ authorization: user.token},
          data:{video: item},
        });
        console.log(removeLikeResponse.data.likes)
        setLike({Like: removeLikeResponse.data.likes});
      }
      catch(error)
      {
        console.log(error);
      }
    }

    const watchHandler = async () => 
    {
      try{
        const watchLaterData = await axios({
          method:"post",
          url:`/api/user/watchlater`,
          headers:{authorization:user.token},
          data:{video:item},
        });
        console.log(watchLaterData);
        setWatchLater({watchLater: watchLaterData.data.watchlater})
         
      }
      catch(error)
      {
        console.log(error.response.data);
      }
    }
    const removeWatchHandler = async () => {
      try {
        const removeWatchResponse= await axios({
          method:"delete",
          url: `/api/user/watchlater/${item._id}`,
          headers:{authorization : user.token},
          data: {video:item},
        });
        setWatchLater({watchLater:removeWatchResponse.data.watchlater});
        
      }
      catch(error)
      {
        console.log(error)
      }
    }
  
   const historyHandler = async () => {
     try {
       const moveToHistoryResponse = await axios({
         method: "post",
         url: "/api/user/history",
         headers: { authorization: user.token },
         data: { video: item },
       });
       console.log(moveToHistoryResponse.data.history);
       setHistory({ history: moveToHistoryResponse.data.history });
     } catch (error) {
       console.log(error.response.data);
     }
      navigate(`/videoplay/${item._id}`);
   };

   

  return (
    <>
      <div className="explore-card">
        <img
          alt="video-image"
          onClick={historyHandler}
          className="card-image"
          src={item.thumbnail}
        />

        <div>{item.title}</div>
        <div>{item.creator}</div>
        <div>
          <div className="card-action-container">
            <div>{item.category}</div>
            <div className="like-watchlater-container">
              {isLike ? (
                <i
                  onClick={removeLikeHandler}
                  class="fa like-icon fa-duotone fa-thumbs-up"
                ></i>
              ) : (
                <i onClick={likeHandler} class="fa fa-duotone fa-thumbs-up"></i>
              )}
              {isWatchLater ? (
                <i
                  onClick={removeWatchHandler}
                  class=" fa fa-solid like-icon fa-clock"
                ></i>
              ) : (
                <i onClick={watchHandler} class=" fa fa-solid fa-clock"></i>
              )}
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );

  }

