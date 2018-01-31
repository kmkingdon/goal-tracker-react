import React from 'react';
import GoalReflection from './goalreflection';

const GoalView= (props)=> {

  return (
    <div className={(props.active ? '' : 'hidden')}>
      <div className="goal-display">
        <h1> My Goal for {props.goal.type}</h1>
        <h2> Specific:</h2>
        <p>{props.goal.specific}</p>
        <h2> Measurable:</h2>
        <p>{props.goal.measurable}</p>
        <h2> Achievable:</h2>
        <p>{props.goal.achievable}</p>
        <h2> Relevant:</h2>
        <p>  {props.goal.relevant ? "This goal is relevant to me." : "This goal is not relevant to me."}</p>
        <h2> Time:</h2>
        <p> When will I achieve my Goal? {props.goal.time}</p>
        <div>
          <h2> Teacher Comment: </h2>
          <p> {props.goal.teacherReview} </p>
        </div>
        <GoalReflection goalId={props.goal.id} goalReflection={props.goal.studentReflection} saveReflection={props.saveReflection}/>
        <button id={props.goal.id} onClick={(id)=>{props.deleteGoal(props.goal.id)}}> Delete Goal </button>
      </div>
    </div>
  );
}

export default GoalView;
