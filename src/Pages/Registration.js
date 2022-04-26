import React, { useState } from "react"

const Registration = () => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    await registerUser({
      username,
      password
    });

  }

  return(
    <div className="login-wrapper">
      <h1>Please Register</h1>
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

 const registerUser = async (credentials) => {
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
      mutation RegisterUser {
        registerUser(username: "${username}", password: "${password}") {
          id
          username
        }
      }
      `
    
    }),
  };
  try {
    const response = await fetch("http://localhost:3000/graphql/", options);
    const json = await response.json();
    console.log(json)
  } catch (e) {
    console.log(e);
    return false;
  }
};


export default Registration;