import React from 'react'
import { useLike } from '../../context/like-context'
import { Navbar } from '../Navbar/Navbar'
import { LikedCard } from './LikedCard';
import "../../App.css";
import {Link} from "react-router-dom";
import { useAuth } from '../../context/auth-context';

export const LikePage = () => {
    const {likes} =useLike();
    
    const {user} = useAuth();
    console.log( "likepage ",likes.Like.length);
    // console.log(item)
  return (
    <>
      {user.token === null ? (
        <div class="no-login-content">
          <div className="login-access"> You need Login to access this </div>
          <Link to="/login">
            <button className="go-to-login-button"> Go To Login</button>
          </Link>
        </div>
      ) : (
        <>
          <Navbar />
          <div className="like-container">
            <div className="side-count-container">
              <div className="side-count-container-heading">
                See What you have liked
              </div>
              <div className="side-count-container-username">user name</div>
              <div className="side-count-container-description">
                {" "}
                So far you have liked {likes.Like.length} of your videos
              </div>
            </div>
            <div className="like-container-content">
              {likes.Like.map((item) => (
                <LikedCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}


