import React, { useState } from "react";
import PropTypes from 'prop-types';

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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
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