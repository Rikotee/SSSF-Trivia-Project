import styled from 'styled-components'
import {Button} from './Button'

const Title = styled.h1`
    margin-top: 3em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const GameOverSD = ({pts}) => {

    addHighscore(pts);

    const refreshPage = () => {
        window.location.reload();
    } 
    
    return (
        <>
            <Title>Game Over</Title>
            <Points>You did {pts} points!</Points>
            <Button onClick={refreshPage}>Return</Button>
        </>
    )
}

// This will first fetch users old highscore then compare
// it to the new one
const addHighscore = async (pts) => {

    fetchHighscore().then(function(result){
     if(pts >= result) { 

    var token = localStorage.getItem("token");
    const myObj = JSON.parse(token);

   const options = {
     method: 'POST',
     headers: {
       Authorization: `Bearer ${myObj.token}`,
       'Content-Type': 'application/json',
       Accept: 'application/json',
     },
     body: JSON.stringify({ query: 
       `
       mutation ModifyHighscore {
        modifyHighscoreSD(id: "${myObj.id}", highscoreSD: ${pts}) {
          id
          highscoreSD
          username
        }
      }
       `
     }),
   };
   try {
     fetch("http://localhost:3000/graphql/", options);
   } catch (e) {
     console.log(e);
     return false;
   }
  }})
 };

// This will fetch users previous highscore so that
// it can be compared to new one
 const fetchHighscore = async () => {
    var token = localStorage.getItem("token");
    const myObj = JSON.parse(token);

   const options = {
     method: 'POST',
     headers: {
      Authorization: `Bearer ${myObj.token}`,
       'Content-Type': 'application/json',
       Accept: 'application/json',
     },
     body: JSON.stringify({ query: 
       `
       {
       user(id: "${myObj.id}") {
        highscoreSD
       }
      }
       `
     }),
   };
   try {
     const response = await fetch("http://localhost:3000/graphql/", options);
     const json = await response.json();
     return json.data.user.highscoreSD;
   } catch (e) {
     console.log(e);
     return false;
   }
 };

export default GameOverSD;