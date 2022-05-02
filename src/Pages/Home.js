import React from "react";
import logo from '../components/image/logo.png';

const Home = () => {
    return(
        <div>
            <img src={logo}  alt="Logo" />
            <h1>
                Welcome to the Trivia!
            </h1>

        </div>
    )
}

export default Home;