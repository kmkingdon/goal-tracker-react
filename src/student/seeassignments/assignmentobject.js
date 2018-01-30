import React from 'react';

const AssignmentObject= (props)=> {
  let fullDate = props.assignment.dueDate;
  let date= fullDate.split('T')[0];
  let percentage = (props.assignment.pointsEarned/props.assignment.pointsPossible)*100

  props.finalColor()

  return (
    <div className="assignment-object">
      <h1>{props.assignment.number}</h1>
      <h2>{props.assignment.name}</h2>
      <h3>{props.assignment.type}</h3>
      <h4>{date}</h4>
      <h5>{props.assignment.pointsPossible}</h5>
      <h6>{props.assignment.pointsEarned}</h6>
      <p className="final">{percentage.toFixed(0)}%</p>
      <button id={props.assignment.id} onClick={props.handleClick}>Edit</button>
    </div>
  );
}

export default AssignmentObject;
