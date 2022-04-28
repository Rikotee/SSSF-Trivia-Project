import React, { useState } from "react";
import PropTypes from 'prop-types';
import Registration from "./Registration";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import styled, { css } from 'styled-components/macro'
import Button from "../components/Button";

const Intro = styled.div`
  margin-top: 5em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 2em;
`;

const Login = ({ setToken }) => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }


  return(
    <Intro>


    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={u => setUserName(u.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <Button type="submit" css={btnCSS}>Submit</Button>

        </div>


      </form>
      <Router>
            <nav>
              <Link to="/registration">Registration</Link>
            </nav>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
      </Router>
    </div>
        </Intro>
  )
}

 const loginUser = async (credentials) => {
   const username = credentials.username
   const password = credentials.password
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query: 
      `
      {
        login(username: "${username}", password: "${password}") {
          id
          username
          highscore
          token
        }
      }
      `
    
    }),
  };
  try {
    const response = await fetch("http://localhost:3000/graphql/", options);
    const json = await response.json();
    console.log(json.data.login)
    return json.data.login;
  } catch (e) {
    console.log(e);
    return false;
  }
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Login;