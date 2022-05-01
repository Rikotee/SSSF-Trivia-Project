import React, { useState } from 'react'
import '../components/style.css'
import Start from '../components/Start'
import Quiz from '../components/Quiz'

// This will start "5 Questions" trivia mode
const Trivia = () => {
  const [start, setStart] = useState(false);

  return (

    <div className="quiz">
      5 Questions
      { start ? <Quiz /> : <Start props={setStart} />} 
    </div>
  );
}

export default Trivia;