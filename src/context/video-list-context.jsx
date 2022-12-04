import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const VideoContext = createContext();

export const useSingleVideo = (videoId) => {
  const { videoList } = useVideoList();
  return videoList.find((item) => item._id === videoId);
};

const VideoProvider = ({ children }) => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    (async () => {
      const videoResponse = await axios.get("/api/videos");
      if (videoResponse.status === 200) {
        setVideoList(videoResponse.data.videos);
      }
    })();
  }, []);

  return (
    <VideoContext.Provider value={{ videoList, setVideoList }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideoList = () => useContext(VideoContext);

export { VideoProvider, useVideoList };
