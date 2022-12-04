import {Routes,Route} from "react-router-dom";
import { HomePage } from "./components/HomePage/HomePage";
import {VideoListPage}from "./components/VideoListPage/VideoListPage";
import { Login } from "./components/Auth/Login";
import { LikePage } from "./components/Liked/LikePage";
import {WatchLaterPage}from "./components/WatchLater/WatchLaterPage";
import { HistoryPage } from "./components/History/HistoryPage";
import { SignUp } from "./components/Auth/SignUp";
import { VideoPlay } from "./components/VideoPlay/VideoPlay";
export const RouterPath = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<VideoListPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/liked" element={<LikePage/>} />
        <Route path="/watchlater" element={<WatchLaterPage/>} />
        <Route path ="/history" element={<HistoryPage/>}/>


         <Route path="/signup" element={<SignUp />} /> 
        <Route path="/videolisting" element={<VideoListPage />} />
        <Route path="/videoplay/:videoId" element={<VideoPlay/>} />
      </Routes>
    </div>
  );
};
