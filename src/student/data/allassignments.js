import React from 'react';
import {Bar} from 'react-chartjs-2';

const AllAssignments= (props)=> {
  let labelsArray = [];
  let dataArray = [];
  let colorArray= [];

  props.assignments.forEach(assignment=> {
    labelsArray.push(assignment.name);
  })

  props.assignments.forEach(assignment=> {
    let final = (assignment.pointsEarned/assignment.pointsPossible) *100;
    dataArray.push(final);
  })

  dataArray.forEach(data => {
    if(data >= 90){
      colorArray.push("rgb(0, 153, 255)");
    } else if(data >= 80 && data < 90){
      colorArray.push("rgb(0, 204, 102)");
    } else if(data >= 70 && data < 80){
       colorArray.push("rgb(255, 255, 102)");
    } else if(data >= 60 && data < 70){
      colorArray.push("rgb(255, 153, 51)");
    } else if(data <= 59){
      colorArray.push( "rgb(255, 80, 80)");
    }
  })


  const data = {
  labels: labelsArray,
  datasets: [
    {
      label: "assignment",
      backgroundColor: colorArray,
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgb(128,128,128)',
      hoverBorderColor: 'rgb(191,191,191)',
      data: dataArray
    }
  ]
};

  return (
    <div id="all" className={"graph-container " + (props.active ? ' ' : 'hidden') }>
        <Bar
          data={data}
          width={100}
          height={400}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            scales: {
                yAxes: [{
                    scaleLabel:{
                      display: true,
                      labelString: "Grade %",
                      fontSize: 16
                    },
                    ticks: {
                        beginAtZero:true,
                        max: 100
                    }
                }],
                xAxes: [{
                  scaleLabel:{
                    display: true,
                    labelString: "Assignment Name",
                    fontSize: 16
                  }
                }]
              }
            }}
        />
        <img src="./assets/gradekey.jpg" alt="gradekey"/>
    </div>
  );
}

export default AllAssignments;
