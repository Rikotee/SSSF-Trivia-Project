import React from "react";
import logo from '../components/image/logo.png';
import styled from 'styled-components/macro'

const Intro = styled.div`
  margin-top: 1em;
  text-align: center;
`;

const Home = () => {
    return(
        <Intro>
        <div>
            <img src={logo}  alt="Logo" />
            <h1>
                Welcome to the Trivia!
            </h1>
        </div>
        </Intro>
    )
}

export default Home;