import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Home, Bookmarks } from "./Pages/index";
import { AuthContext } from "./context/auth-context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const { logged } = useContext(AuthContext);

  const getCookies = (cookieName) => {
    let dataArray;
    let cookieArray = document.cookie.split(";");
    if (cookieArray !== 0) {
      for (let i = 0; i < cookieArray.length; i++) {
        dataArray = cookieArray[i].split("=");
        if (dataArray[0] === cookieName) {
          return dataArray[1];
        }
      }
    }
  };

  return (
    <div className="App">
      <Routes>
        {getCookies("encodedToken")}
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={logged || getCookies("encodedToken") ? <Home /> : <Login />}
        />
        <Route
          path="/bookmarks"
          element={
            logged || getCookies("encodedToken") ? <Bookmarks /> : <Login />
          }
        />

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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
