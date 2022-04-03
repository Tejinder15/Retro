import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider,WatchLaterProvider,HistoryProvider,LikeProvider, PlaylistProvider } from "./Context/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <WatchLaterProvider>
        <HistoryProvider>
          <LikeProvider>
            <PlaylistProvider>
              <App />
            </PlaylistProvider>
          </LikeProvider>
        </HistoryProvider>
      </WatchLaterProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
