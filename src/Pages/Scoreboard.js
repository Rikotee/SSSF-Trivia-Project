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
            THIS IS THE SCOREBOARD PAGE!
              <div> {users.map(user => (
              <li key={user.id}>{user.username} highscore: {user.highscore}</li>
            ))} </div>
        </div>
              </Intro>
    )
}

const USERS_QUERY = `
{
  users(limit: 10) {
    id
    username
    highscore
  }
}
`

const useLaunches = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
      fetch("http://localhost:3000/graphql/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: USERS_QUERY})
      }).then(response => response.json())
      .then(data => setUsers(data.data.users))
    }, []);
    return users;
  }

export default Scoreboard;