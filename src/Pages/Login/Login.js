import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import "./Login.css";

const Login = () => {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setLogged } = useContext(AuthContext);
  const [showError, setShowError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view`,
          {
            headers: {
              authorization: "Bearer keyfXgn8PL6pB3x32",
            },
          }
        );
        setData(data.records);
      } catch (error) {
        console.log("Please refresh! Some error has occured.");
      }
    })();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    data.map((userData) => {
      if (userName && password) {
        if (userData.fields.username === userName) {
          if (userData.fields.password === password) {
            document.cookie = "encodedToken=c84fdhsue82isdJJHHGH%%&&0";
            setLogged(true);
            navigate("/home");
          } else {
            setErrorMsg("Username / Password is incorrect!");
            setShowError(true);
          }
        } else {
          setErrorMsg("Username / Password is incorrect!");
          setShowError(true);
        }
      } else {
        setErrorMsg("Enter both Username and Password!");
        setShowError(true);
      }
      setUserName("");
      setPassword("");
    });
  };

  return (
    <div className="SignUp center">
      <div className="signUp-Container">
        <h1 className="signUp-heading">Login</h1>

        <form className="signup-contents">
          <label htmlFor="userNm" className="userNm">
            Email address
          </label>
          <input
            type="text"
            className="userNm"
            id="userNm"
            placeholder="Enter username"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
              setShowError(false);
            }}
          />
          <br />
          <label htmlFor="userPswd" className="userPswd">
            Password
          </label>
          <input
            type="password"
            className="userPswd"
            id="userPswd"
            placeholder="Enter password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setShowError(false);
            }}
          />
          <br />
          <div className="check">
            <input
              type="checkbox"
              name="userAgreement"
              className="userAgreement"
              id="userAgreement"
              readOnly
              // checked={rememberPassword ? true : false}
              // onClick={() => setRememberPassword(!rememberPassword)}
            />
            <label htmlFor="checkbox-remember" className="checkbox-label">
              Remember me
            </label>
          </div>

          <button
            className="signup-btns createNewAccount-btn"
            onClick={handleLogin}
          >
            Login
          </button>
          {showError ? <p className="error-msg">{errorMsg}</p> : ""}
        </form>
      </div>
    </div>
  );
};

export default Login;
