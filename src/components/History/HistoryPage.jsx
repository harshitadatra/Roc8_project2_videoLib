import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import {HistoryCard} from './HistoryCard'
import { useHistory } from '../../context/history-context';
import { useAuth } from '../../context/auth-context';
import { Link } from 'react-router-dom';

 export const HistoryPage = () => {
   const { history } = useHistory();
   const {user} =useAuth();
  return (
    <>
     { user.token === null ? (
        <div class="no-login-content">
          <div className="login-access"> You need Login to access this </div>
          <Link to="/login">
            <button className="go-to-login-button"> Go To Login</button>
          </Link>
        </div>
      ) :(
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
            So far you have liked {history.history.length} of your videos
          </div>
        </div>
        <div className="like-container-content">
          {history.history.map((item) => (
            <HistoryCard item={item} key={item.id}/>
          ))}
        </div>
      </div>
      </>
     
      )}
      
    </>
    )
      
}



