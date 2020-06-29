import React, {useState, useEffect} from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer(timer => (timer + 1));
      clearInterval(timerId);
    }, 1000);
  }, [timer]);
  
  return (
    <div>
      timer!
      <p>{timer}</p>
    </div>
  )
}

export default Timer;