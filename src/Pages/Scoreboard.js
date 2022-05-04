import React from "react";
import styled from 'styled-components/macro'

const Intro = styled.div`
  margin-top: 1em;
  text-align: center;
`;

const Scoreboard = () => {
    const users = useLaunches()

    return(
      <Intro>
        <div>
             SUDDEN DEATH TOP 10! 
             <br />
             <br />
             <ul>
              <div> {users.map(user => (
              <li key={user.username} >{user.username} - highscore: {user.highscoreSD}</li>
            ))} </div>
            </ul>
        </div>
      </Intro>
    )
}

const USERS_QUERY = `
{
  users {
    username
    highscoreSD
  }
}
`
// This will fetch 10 users that have highest points
const useLaunches = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
      var token = localStorage.getItem("token");
      const myObj = JSON.parse(token);

      fetch("https://env-4867079.jelastic.metropolia.fi/graphql/", {
      method: "POST",
      headers: {Authorization: `Bearer ${myObj.token}`,
      "Content-Type": "application/json" },
      body: JSON.stringify({ query: USERS_QUERY})
      }).then(response => response.json())
      .then(data => setUsers(data.data.users))
    }, []);
    return users;
  }

export default Scoreboard;