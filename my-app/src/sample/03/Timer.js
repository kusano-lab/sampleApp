import React, {useEffect, useReducer} from 'react';
import styled from 'styled-components';

const Timer = () => {

  const initialState = {
    timer: 0,
    timerId: null,
    isSwitch: false
  }

  const COUNTUP = "COUNTUP";
  const POUSE = "POUSE";

  const reducer = (state, action) => {
    clearInterval(state.timerId);
    switch(action.type){
      case COUNTUP:
        return {
          timer: state.timer + 1,
          isSwitch: false
        }
      case POUSE:
        return {
          timer: state.timer,
          isSwitch: true
        }
      default:
        break;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if(state.isSwitch) return;

    state.timerId = setTimeout(() => {
      dispatch({type: "COUNTUP"})
    }, 1000);
  }, [state]);
  
  return (
    <div>
      timer!
      <p>{state.timer}</p>
      <ButtonWrap>
        <button className={state.isSwitch? "active": ""} onClick={() => state.isSwitch && dispatch({type: "COUNTUP"})}>start</button>
        <button className={state.isSwitch? "": "active"} onClick={() => !state.isSwitch && dispatch({type: "POUSE"})}>stop</button>
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
    opacity: .5;
    padding: 5px 10px;
    &:first-child {
      margin-left: 0;
    }
    &.active {
      opacity: 1;
    }
  }
`;

export default Timer;