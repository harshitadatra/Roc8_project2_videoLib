import React from 'react'
import { useWatchLater } from '../../context/watch-later-context'
// import { NavLink } from 'react-router-dom'
import { Navbar } from '../Navbar/Navbar'
import { WatchLaterCard } from './WatchLaterCard';
import {useAuth} from "../../context/auth-context"
// import { Sidebar } from '../SideBar/Sidebar';
import { Link } from 'react-router-dom';

export const WatchLaterPage = () => {
  const {watchLater} = useWatchLater();
  const {user} = useAuth();
  console.log(watchLater.watchLater);
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
                So far you have liked {watchLater.watchLater.length} of your videos
              </div>
            </div>
            <div className="like-container-content">
              {watchLater.watchLater.map((item) => (
                <WatchLaterCard item={item} key={item.id} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

