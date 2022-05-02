import React from "react";
import logo from '../components/image/logo.png';
import styled from 'styled-components/macro'

const Intro = styled.div`
  margin-top: 1em;
  text-align: center;
`;

const Image = styled.div`
    display: flex;
    justify-content: center;
`;

const Home = () => {
    return(
        <Intro>
        <Image>
            <img src={logo}  alt="Logo" />
        </Image>
        </Intro>
    )
}

export default Home;