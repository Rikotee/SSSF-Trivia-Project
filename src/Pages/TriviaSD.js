import React, { useState } from 'react'
import '../components/style.css'
import Start from '../components/Start'
import Quiz2 from '../components/Quiz2'

// This will start "Sudden Death" trivia mode
const TriviaSD = () => {
  const [start, setStart] = useState(false);

  return (
    <div className="quiz2">
        Sudden Death.
        One wrong answer and it's over!
      { start ? <Quiz2 /> : <Start props={setStart} />} 
    </div>
  );
};

export default TriviaSD;