import React from 'react';

const GoalButton= (props)=> {

  return (
    <button id={props.goal.id} onClick={() => {props.setDataView(props.goal.type); props.setGoalView(props.goal.id)}}>
      {props.goal.type}
    </button>
  );
}

export default GoalButton;
