import React, { useState } from 'react'
import '../components/style.css'
import Start from '../components/Start'
import Quiz from '../components/Quiz'

const Trivia = () => {
  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      { start ? <Quiz /> : <Start props={setStart} />} 
    </div>
  );
}

export default Trivia;