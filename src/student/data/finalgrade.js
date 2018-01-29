import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const FinalGrade= (props)=> {
  let labelArray = ['Classwork', 'Homework', 'Projects', 'Assessments'];

  let possibleClasswork = 0;
  let earnedClasswork = 0;

  let possibleHomework = 0;
  let earnedHomework = 0;

  let possibleProjects = 0;
  let earnedProjects = 0;

  let possibleAssessments = 0;
  let earnedAssessments = 0;

  props.assignments.forEach(assignment => {
    if(assignment.type === "Classwork"){
      possibleClasswork += assignment.pointsPossible;
      earnedClasswork += assignment.pointsEarned;
    } else if(assignment.type === "Homework"){
      possibleHomework += assignment.pointsPossible;
      earnedHomework += assignment.pointsEarned;
    } else if (assignment.type === "Projects"){
      possibleProjects += assignment.pointsPossible;
      earnedProjects += assignment.pointsEarned;
    } else if (assignment.type === "Assessments"){
      possibleAssessments += assignment.pointsPossible;
      earnedAssessments += assignment.pointsEarned;
    }
  })

  let classworkGrade= ((earnedClasswork/possibleClasswork)*100)*.2;
  let homeworkGrade= ((earnedHomework/possibleHomework)*100)*.1;
  let projectsGrade= ((earnedProjects/possibleProjects)*100)*.35;
  let assessmentsGrade= ((earnedAssessments/possibleAssessments)*100)*.35;


  let dataArray = [classworkGrade, homeworkGrade, projectsGrade, assessmentsGrade ];

  let totalGrade = 0;
  dataArray.forEach(grade => {
    totalGrade += grade;
  })

  let missingPoints = 100 -totalGrade;

  dataArray.push(missingPoints);

  const data = {
	labels: labelArray,
	datasets: [{
		data: dataArray,
		backgroundColor: [
		'red',
		'blue',
		'green',
    'yellow',
    'rgb(175,238,238)'
		],
    borderColor: [
      'white',
      'white',
      'white',
      'white',
      'rgb(175,238,238)'
    ],
		hoverBackgroundColor: [
      'red',
  		'blue',
  		'green',
      'yellow',
      'rgb(175,238,238)'
		]
	}]
};

  return (
    <div id="final" className={"graph-container " + (props.active ? ' ' : 'hidden') }>
      <Doughnut
        data={data}
        options= {{
          maintainAspectRatio: false,
          responsive: true,
            legend: {
                position: 'top',
            },
            animation: {
                animateScale: true,
                animateRotate: true
            },
        }}/>
        <h2> Total Grade: {totalGrade.toFixed(2)}% </h2>
    </div>
  );
}

export default FinalGrade;
