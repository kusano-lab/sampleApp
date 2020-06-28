import React, {useState} from 'react';
import styled from 'styled-components';

const Countup = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      count up!
      <p>{count}</p>
      <ButtonWrap>
        <button onClick={() => setCount(count + 1)}>up</button>
        <button onClick={() => setCount(count - 1)}>down</button>
        <button onClick={() => setCount(0)}>reset</button>
      </ButtonWrap>
    </div>
  )
}

const ButtonWrap = styled.div`
  color: red;
  display: flex;
  button {
    display: block;
    margin-left: 10px;
    padding: 5px 10px;
    &:first-child {
      margin-left: 0;
    }
  }
`;

export default Countup;