import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Sidebar } from '../SideBar/Sidebar'
import {VideoList} from "../VideoListPage/VideoList";


export const VideoListPage = () => {

  return (
    <div>
      <Navbar />
      <div className="video-list-page">
        <Sidebar />
        <div className="explore-container">
        
          
            <VideoList />
          </div>
        </div>
      </div>
   
  );
}


