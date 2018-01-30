import React from 'react';
import GoalComment from './goalcomment';

const GoalTeacherView= (props)=> {

  return (
    <div className={"goal-teacher-view " + (props.active ? '' : 'hidden')}>
      <div className="goal-display-teacher">
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
          <h2> Student Reflection: </h2>
          <p> {props.goal.studentReflection} </p>
        </div>
        <GoalComment goalId={props.goal.id} teacherReview={props.goal.teacherReview} saveComment={props.saveComment} />
      </div>
    </div>
  );
}

export default GoalTeacherView;
