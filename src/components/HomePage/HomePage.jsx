import React from 'react'
import { useAuth } from '../../context/auth-context';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../SideBar/Sidebar';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const {user} = useAuth();
  console.log(user)
  return (
    <div>
      <Navbar />
      <div className="home-page-container">
        <Sidebar />
        <main className="main-container">
          <div className="details-container">
            <div>
              <img
                className="main-image"
                src="https://ik.imagekit.io/avavya/VideoLib/sabysingh_KM09Ln7j9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648500041757"
                alt="img-loading"
              />
            </div>
            <div className="description-container">
              <div className="description-header"> Welcome to Music Jungle</div>
              <div> A place to watch your favourite Artists</div>
              <div>
                Independent music (often referred to as indie music or indie) is
                music produced independently from commercial record labels or
                their subsidiaries, a process that may include an autonomous,
                do-it-yourself approach to recording and publishing.
              </div>
              <Link to="/explore">
                <button className="explore-button"> Explore </button>
              </Link>
            </div>
          </div>
          <div className="genre-container">
            <div className="genre-header">
              <div className="genre-name"> browse genres</div>
              <Link to="/explore">
                {" "}
                <button className="home-page-button"> see all</button>
              </Link>
            </div>
            <div className="genre-details">
              <div className="card-container">
                <img
                  alt="video2"
                  className="image-container"
                  src="https://ik.imagekit.io/avavya/VideoLib/Category-indie2_sIX1POKgm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648546097472"
                />

                <div> indie</div>
              </div>
              <div className="card-container">
                <img
                  alt="video3"
                  className="image-container"
                  src="https://ik.imagekit.io/avavya/VideoLib/Category-pop_wBiHfSA_AV.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648546098640"
                />
                <div>Pop</div>
              </div>
              <div className="card-container">
                <img
                  alt="video4"
                  className="image-container"
                  src="https://ik.imagekit.io/avavya/VideoLib/category-background_pdthMKpMi.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648546096643"
                />
                <div> Romance</div>
              </div>
              <div className="card-container">
                <img
                  alt="video5"
                  className="image-container"
                  src="https://ik.imagekit.io/avavya/VideoLib/category-instrumental_3iCeFQRSW.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648546097745"
                />

                <div>Instrumental</div>
              </div>
              <div className="card-container">
                <img
                  alt="video6"
                  className="image-container"
                  src="https://ik.imagekit.io/avavya/VideoLib/category-hiphop_km7NJotML.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648546096688"
                />

                <div>Hip-Hop </div>
              </div>
              <div className="card-container">
                <img
                  alt="video6"
                  className="image-container"
                  src="https://ik.imagekit.io/avavya/VideoLib/category-live__2ImeO3la.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1648546098289"
                />

                <div>Live</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}


