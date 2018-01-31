import React from 'react';

const GoalReflection= (props)=> {
  
  if(props.goalReflection === ''){
  return (
    <div className="goal-reflection">
      <form onSubmit={(event, id)=>{props.saveReflection(event , props.goalId)}}>
        <label htmlFor="reflection">Student Reflection: How did you do on this goal?</label>
        <textarea name="reflection" placeholder="Enter reflection here when the time of the goal is completed"></textarea>
        <input name="submit" type="submit" defaultValue="Submit Reflection"/>
      </form>
    </div>
  )} else {
    return (
    <div className="goal-reflection">
      <h2>Student Reflection:</h2>
      <p>{props.goalReflection}</p>
    </div>
  )}
}

export default GoalReflection;
