import React, {useReducer} from 'react';
import styled from 'styled-components';

const initialState = {
  count: 0
}

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const reducer = (state, action) => {
  switch(action.type){
    case INCREMENT: 
      return {
        count: state.count + 1
      }
    case DECREMENT:
      return {
        count: state.count - 1
      }
    case RESET:
      return {
        count: 0
      }
    default:
      break;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      count up!
      <p>{state.count}</p>
      <ButtonWrap>
        <Button
          onClick={() => dispatch({type: "INCREMENT"})}
        >UP</Button>

        <Button
          onClick={() => dispatch({type: "DECREMENT"})}
        >DOWN</Button>
        
        <Button
          onClick={() => dispatch({type: "RESET"})}
        >RESET</Button>
      </ButtonWrap>
    </div>
  )
}

const ButtonWrap = styled.div`
  color: red;
  display: flex;
`;

const Button = styled.button`
  display: block;
  margin-left: 10px;
  padding: 5px 10px;
  &:first-child {
    margin-left: 0;
  }
`

export default Counter;