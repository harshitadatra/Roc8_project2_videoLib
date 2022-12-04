import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoProvider } from "./context/video-list-context";
import { AuthProvider } from "./context/auth-context";
import { LikeProvider } from "./context/like-context";
 import { WatchLaterProvider } from "./context/watch-later-context";
import { HistoryProvider } from "./context/history-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HistoryProvider>
        <WatchLaterProvider>
          <LikeProvider>
            <AuthProvider>
              <VideoProvider>
                <App />
              </VideoProvider>
            </AuthProvider>
          </LikeProvider>
        </WatchLaterProvider>
      </HistoryProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
