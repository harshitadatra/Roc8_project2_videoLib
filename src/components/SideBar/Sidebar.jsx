import React from 'react';
import { Link } from 'react-router-dom';


export const Sidebar = () => {
  return (
    <div>
      <aside className="aside-container">
        <Link to="/">
          
          <div className="aside-category">Home</div>
        </Link>
        <div className="aside-category">
          <Link to="/explore">Explore</Link>
        </div>
        <div className="aside-category"> Playlists</div>
        <div className="aside-category">
          <Link to="/liked">Liked</Link>
        </div>
        <div className="aside-category">
          <Link to="/watchlater">Later</Link>
        </div>
        <div className="aside-category">
          <Link to="/history">History</Link>
        </div>
      </aside>
    </div>
  );
}


