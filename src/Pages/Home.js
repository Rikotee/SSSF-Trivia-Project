import React from "react";

const Home = () => {
    return(
        <div>
            <h1>
                Welcome to my Website
            </h1>
            <button
            onClick={() => {
                console.log('test')
            }}
            > test to console</button>
        </div>
    )
}

export default Home;