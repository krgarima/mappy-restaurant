import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { logged, setLogged } = useContext(AuthContext);

  // let encodedToken =
  //   document.cookie.length > 0
  //     ? document.cookie.split(";")[2].split("=")[1]
  //     : "";

  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo">Mappy</div>
      </Link>

      <ul className="navicons">
        <button
          className="log"
          onClick={() => {
            if (logged) {
              setLogged(false);
              document.cookie = "encodedToken=";
              navigate("/home");
            } else {
              navigate("/");
            }
          }}
        >
          {logged ? "Log Out" : " Log In"}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
