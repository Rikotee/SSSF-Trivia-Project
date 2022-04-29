import React from 'react';
import './App.css';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';
import Scoreboard from './Pages/Scoreboard';
import Trivia from './Pages/Trivia';
import TriviaSD from './Pages/TriviaSD';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import useToken from './components/useToken';
import styled, { css } from 'styled-components/macro'
import Button from './components/Button';
/* import logo from './components/image/logo.png'; */

const Intro = styled.div`
  margin-top: 1em;
  text-align: center;
`;

const btnCSS = css`
    margin-top: 1em;
`;

const App = () => {
  const { token, setToken } = useToken();

  if(!token) {
    //console.log(token)
    return <Login setToken={setToken} />
  }

  return (
    <Intro>

{/*             <img src={logo}  alt="Logo" /> */}

            <Button onClick={() => {
              localStorage.clear();
              window.location.reload();
              }} css={btnCSS}>Logout</Button>
          <Router>
            <nav>
              <Link to="/">  Home  </Link>
              <br />
              <Link to="/scoreboard">
                  <Button css={btnCSS}> Scoreboard! </Button>
              </Link>

              <Link to="/trivia">
                  <Button css={btnCSS}> 5 Questions! </Button>
              </Link>

              <Link to="/triviasd">
                  <Button css={btnCSS}> Sudden Death! </Button>
              </Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/scoreboard" element={<Scoreboard />} />
              <Route path="/trivia" element={<Trivia />} />
              <Route path="/triviasd" element={<TriviaSD />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <div>

            </div>

      </Router>

    </Intro>
  );
}

export default App;