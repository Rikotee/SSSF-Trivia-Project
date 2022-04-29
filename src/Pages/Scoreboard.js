import React from "react";
import styled from 'styled-components/macro'

const Intro = styled.div`
  margin-top: 3em;
  text-align: center;
`;

function Scoreboard(){
    const usersNotFiltered = useLaunches()
    const usersF = usersNotFiltered.filter(obj=> obj.highscore >= 0.1);
    const usersS = usersF.sort(function (a, b) {
      return b.highscore - a.highscore;
    });
    const users = usersS.slice(0, 10)

    return(
      <Intro>
        <div>
             TOP 10! 
             <br />
             <br />
              <div> {users.map(user => (
              <li key={user.id}>{user.username} - highscore: {user.highscore}</li>
            ))} </div>
        </div>
              </Intro>
    )
}

const USERS_QUERY = `
{
  users {
    id
    username
    highscore
  }
}
`

const useLaunches = () => {
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
      var x = localStorage.getItem("token");
      const myObj = JSON.parse(x);

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