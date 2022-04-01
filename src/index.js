import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { AuthProvider } from "./Context/AuthContext/auth-context";
import { WatchLaterProvider } from "./Context/WatchLaterContext/watchlater-context";
import { HistoryProvider } from "./Context/HistoryContext/history-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
      <WatchLaterProvider>
        <HistoryProvider>
          <App />
        </HistoryProvider>
      </WatchLaterProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
