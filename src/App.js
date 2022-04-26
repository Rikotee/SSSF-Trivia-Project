import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import ErrorPage from './Pages/ErrorPage';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Scoreboard from './Pages/Scoreboard';
import Trivia from './Pages/Trivia';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import useToken from './components/useToken';


const App = () => {
  const { token, setToken } = useToken();

  if(!token) {
    console.log(token)
    return <Login setToken={setToken} />
  }

  return (
          <Router>
            <nav>
              <Link to="/"> Home </Link>
              <Link to="/profile"> Profile </Link>
              <Link to="/scoreboard"> Scoreboard </Link>
              <Link to="/trivia"> Trivia </Link>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/scoreboard" element={<Scoreboard />} />
              <Route path="/trivia" element={<Trivia />} />
              <Route path="/profile/:username" element={<Profile />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <div>
              every page
            </div>

      </Router>

  );
}

export default App;