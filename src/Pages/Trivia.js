import React, { useState } from 'react'
import '../components/style.css'
import Start from '../components/Start'
import Quiz2 from '../components/Quiz2'

const Trivia = () => {
  const [start, setStart] = useState(false);

  return (
    <div className="quiz">
      { start ? <Quiz2 /> : <Start props={setStart} />} 
    </div>
  );
}

export default Trivia;