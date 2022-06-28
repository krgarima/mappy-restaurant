import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/auth-context";
import { MapContextProvider } from "./context/map-context";
import { BookmarksContextProvider } from "./context/bookmarks-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <MapContextProvider>
          <BookmarksContextProvider>
            <App />
          </BookmarksContextProvider>
        </MapContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
