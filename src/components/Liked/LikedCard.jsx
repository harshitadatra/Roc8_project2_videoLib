import React from 'react'

export const LikedCard = ({item}) => {
  // const {likes,setLike} = useLike();
  // const {user} = useAuth();
  // console.log(user);
// console.log("like card likes",likes)
  //  console.log("item liked card" ,item)
  return (
    <>
      <div className="like-container-card">
        <img
          alt="video7"
          className="like-container-card-image"
          src={item.thumbnail}
        />

        <div className="video-name-details">
          <div className="video-name">{item.creator}</div>
          <div className="video-details">
            <div className="video-artist">{item.creator}</div>
            <i class="fa fa-sharp fa-solid fa-trash"></i>
          </div>
        </div>
      </div>
    </>
  );
}


