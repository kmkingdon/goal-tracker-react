import React from 'react';

const GoalButton= (props)=> {

  return (
    <button id={props.goal.id} onClick={props.handleClick}>
      {props.goal.type}
    </button>
  );
}

export default GoalButton;
