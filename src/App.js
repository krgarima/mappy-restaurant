import { useEffect, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Home, Bookmarks } from "./Pages/index";
import { AuthContext } from "./context/auth-context";
import "./App.css";

function App() {
  const { logged } = useContext(AuthContext);
  // let encodedToken =
  //   document.cookie.length !== 0
  //     ? document.cookie.split(";")[2].split("=")[1]
  //     : "";

  useEffect(() => {
    if (document.cookie.length === 0) {
      document.cookie = "mapData=[];bookmarks=[];encodedToken=";
    }
  }, []);

  return (
    <div className="App">
      {console.log(document.cookie)}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={logged ? <Home /> : <Login />} />
        <Route path="/bookmarks" element={logged ? <Bookmarks /> : <Login />} />

        <Route
          path="*"
          element={
            <div
              style={{
                padding: "1rem",
                backgroundColor: "var(--background-color)",
              }}
            >
              <p className="error404">404 Page Not Found!</p>
              <p className="error404-msg">
                Oops!! Looks like you have entered a wrong URL
              </p>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
