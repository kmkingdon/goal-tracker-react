import React from 'react';

const AssignmentObject= (props)=> {
  let fullDate = props.assignment.dueDate;
  let date= fullDate.split('T')[0];
  let percentage = (props.assignment.pointsEarned/props.assignment.pointsPossible)*100

  let pArray = document.querySelectorAll('p');

  pArray.forEach(p => {
    if(p.innerHTML.split('%')[0] >= 90){
      p.style.backgroundColor = "rgb(0, 153, 255)";
    } else if(p.innerHTML.split('%')[0] >= 80 && p.innerHTML.split('%')[0] < 90){
      p.style.backgroundColor = "rgb(0, 204, 102)";
    } else if(p.innerHTML.split('%')[0] >= 70 && p.innerHTML.split('%')[0] < 80){
      p.style.backgroundColor = "rgb(255, 255, 102)";
    } else if(p.innerHTML.split('%')[0] >= 60 && p.innerHTML.split('%')[0] < 70){
      p.style.backgroundColor = "rgb(255, 153, 51)";
    } else if(p.innerHTML.split('%')[0] <= 59){
      p.style.backgroundColor = "rgb(255, 80, 80)";
    }
  });

  return (
    <div className="assignment-object">
      <h1>{props.assignment.id}</h1>
      <h2>{props.assignment.name}</h2>
      <h3>{props.assignment.type}</h3>
      <h4>{date}</h4>
      <h5>{props.assignment.pointsPossible}</h5>
      <h6>{props.assignment.pointsEarned}</h6>
      <p>{percentage}%</p>
      <button id={props.assignment.id} onClick={props.handleClick}>Edit</button>
    </div>
  );
}

export default AssignmentObject;
