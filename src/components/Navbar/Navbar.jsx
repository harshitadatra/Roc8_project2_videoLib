import React from 'react';
import {Link} from "react-router-dom";
import { useAuth } from '../../context/auth-context';
import { useLike } from '../../context/like-context';
import { useWatchLater } from '../../context/watch-later-context';
import {useHistory} from "../../context/history-context"
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {
 const {setWatchLater} = useWatchLater();
 const {user, setUser} = useAuth();
 const {setLike} = useLike();
 const {setHistory} = useHistory();
 const navigate = useNavigate();
 
   
  const logoutHandler = () => {
     setUser({ token: null });
     setLike({ Like: [] });
     setWatchLater({ watchLater: [] });
     setHistory({ history: [] });
     navigate("/");
   };

  return (
    
    <div>
      <nav className="nav-container">
        <div className="brand-name">Music Jungle</div>
        {user.token === null ? (
          <Link to="/login">
            <button className="home-page-button">LOGIN</button>
          </Link>
        ) : (
          <Link >
            <button onClick = {logoutHandler} className="home-page-button">LOGOUT</button>
          </Link>
        )}
      </nav>
    </div>
  );
}


