import styled from 'styled-components'
import {Button} from './Button'

const Title = styled.h1`
    margin-top: 4em;
    font-size: 48px;
`;

const Points = styled.p`
    font-size: 24px;
    margin-bottom: 3em;
`;

const GameOver = ({pts}) => {

    const refreshPage = () => {
        addHighscore(pts);
        window.location.reload();
    } 
    
    return (
        <>
            <Title>Game Over</Title>
            <Points>You did {pts} out of 5!</Points>
            <Button onClick={refreshPage}>Retry</Button>
        </>
    )
}

const addHighscore = async (pts) => {

    fetchHighscore().then(function(result){
        console.log("result: ", result)




     if(pts >= result) { 

    var x = localStorage.getItem("token");
    const myObj = JSON.parse(x);

   const options = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       Accept: 'application/json',
     },
     body: JSON.stringify({ query: 
       `
       mutation ModifyHighscore {
        modifyHighscore(id: "${myObj.id}", highscore: ${pts}) {
          id
          highscore
          username
        }
      }
       `
     }),
   };
   try {
     const response =  fetch("http://localhost:3000/graphql/", options);
     const json = response.json();
     console.log(json)
   } catch (e) {
     console.log(e);
     return false;
   }
}      })
 };

 const fetchHighscore = async () => {
    var x = localStorage.getItem("token");
    const myObj = JSON.parse(x);

   const options = {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
       Accept: 'application/json',
     },
     body: JSON.stringify({ query: 
       `
       {
       user(id: "${myObj.id}") {
        highscore
       }
      }
       `
     }),
   };
   try {
     const response = await fetch("http://localhost:3000/graphql/", options);
     const json = await response.json();
     return json.data.user.highscore;
   } catch (e) {
     console.log(e);
     return false;
   }
 };

export default GameOver
