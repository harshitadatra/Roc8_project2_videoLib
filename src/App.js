import "./App.css";
import { Login } from "./components/Auth/Login";
import { SignUp } from "./components/Auth/SignUp";
import { HomePage } from "./components/HomePage/HomePage";
import { VideoListCard } from "./components/VideoListPage/VideoListCard";
import VideoListPage from "./components/VideoListPage/VideoListPage";
import{RouterPath} from "./Routes";


function App() {
  return (
    <div>
      {/* <Login/> */}
      {/* <SignUp/> */}
      {/* <HomePage/> */}
      {/* <VideoListCard/>  */}
      {/* <VideoListPage/> */}
      <RouterPath>
        
      </RouterPath>
    </div>
  );
}

export default App;
