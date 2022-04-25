import React from "react";
import { useNavigate } from "react-router-dom";

function Scoreboard(){
    const users = useLaunches()
    let navigate = useNavigate();
    return(
        <div>
            THIS IS THE SCOREBOARD PAGE!
            <button
            onClick={() => {
                navigate("/home")
            }}
            > Change to home page</button>
                        <div> {users.map(user => (
              <li key={user.id}>{user.username} highscore: {user.highscore}</li>
            ))} </div>
        </div>
        
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