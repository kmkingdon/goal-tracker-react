import React from 'react';

const GoalComment= (props)=> {

  if(props.teacherReview === ''){
  return (
    <div className="goal-comment">
      <form onSubmit={(event, id)=>{props.saveComment(event , props.goalId)}}>
        <label htmlFor="review">Teacher Review: What feedback do you have for this goal?</label>
        <textarea name="review" ></textarea>
        <input name="submit" type="submit" defaultValue="Submit Review"/>
      </form>
    </div>
  )} else {
    return (
    <div className="goal-comment">
      <h2>Teacher Review:</h2>
      <p>{props.teacherReview}</p>
    </div>
  )}
}

export default GoalComment;
