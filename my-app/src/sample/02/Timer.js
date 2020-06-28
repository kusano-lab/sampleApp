import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(timer + 1);
      clearInterval(intervalId);
    }, 1000);
    setIntervalId(intervalId);
  }, [timer]);
  
  return (
    <div>
      timer!
      <p>{timer}</p>
    </div>
  )
}

export default Timer;