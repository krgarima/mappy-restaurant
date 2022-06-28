import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Login.css";
import { AuthContext } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState([]);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setLogged } = useContext(AuthContext);
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
      if (userData.fields.username === userName) {
        if (userData.fields.password === password) {
          setLogged(true);
          navigate("/home");
        } else console.log("no");
      } else console.log("no");
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

          {/* <button
            className="signup-btns btn-dummyData"
            onClick={setDummyData}
          >
            Add Dummy username & password
          </button> */}
          {/* <button className="signup-btns toSignUpPage-btn">
            <Link to="/SignUp">Create a New Account &gt;</Link>
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
