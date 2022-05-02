import React from "react";
import styled from 'styled-components/macro'

const Intro = styled.div`
  margin-top: 3em;
  text-align: center;
`;

function Scoreboard(){
    const users = useLaunches()

    return(
      <Intro>
        <div>
             SUDDEN DEATH TOP 10! 
             <br />
             <br />
              <div> {users.map(user => (
              <li key={user.username}>{user.username} - highscore: {user.highscoreSD}</li>
            ))} </div>
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

      fetch("http://localhost:3000/graphql/", {
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