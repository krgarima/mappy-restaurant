import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { logged, setLogged } = useContext(AuthContext);

  console.log(logged);
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
              // localStorage.removeItem("token");
              navigate("/home");
            } else {
              navigate("/");
            }
          }}
        >
          {logged ? "Log Out" : " Log In"}
        </button>

        {/* <li>
          <i
            className="fas fa-2x fa-search search-icon"
            onClick={() => setShowSearchBar(!showSearchBar)}
          ></i>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
