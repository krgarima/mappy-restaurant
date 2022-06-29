import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { setLogged } = useContext(AuthContext);

  const getCookies = (cookieName) => {
    let cookieArray = document.cookie.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      if (cookieArray[i].split("=")[0] === " " + cookieName) {
        return cookieArray[i].split("=")[1];
      }
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">Mappy</div>
      </Link>

      <ul className="navicons">
        <button
          className="log"
          onClick={() => {
            if (getCookies("encodedToken")) {
              setLogged(false);
              document.cookie = "encodedToken=";
              navigate("/home");
            } else {
              navigate("/");
            }
          }}
        >
          {getCookies("encodedToken") ? "Log Out" : " Log In"}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
