import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider,WatchLaterProvider,HistoryProvider,LikeProvider } from "./Context/";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <WatchLaterProvider>
        <HistoryProvider>
          <LikeProvider>
          <App />
          </LikeProvider>
        </HistoryProvider>
      </WatchLaterProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
