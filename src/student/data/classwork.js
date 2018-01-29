import React from 'react';
import {Line} from 'react-chartjs-2';

const Classwork= (props)=> {
  let dataArray = [];
  let labelArray= [];
  let colorArray= [];

  props.assignments.forEach(assignment=> {
    if(assignment.type === "Classwork"){
      let final = (assignment.pointsEarned/assignment.pointsPossible) *100;
      dataArray.push(final);
    }
  })

  props.assignments.forEach(assignment=> {
    if(assignment.type === "Classwork"){
      labelArray.push(assignment.name);
    }
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
  labels: labelArray,
  datasets: [
    {
      label: labelArray,
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: colorArray,
      pointBackgroundColor: colorArray,
      pointBorderWidth: 10,
      pointHoverRadius: 20,
      pointHoverBackgroundColor: colorArray,
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: dataArray
    }
  ]
};

  return (
    <div id="classwork" className={"graph-container " + (props.active ? ' ' : 'hidden') }>

      <Line
        data={data}
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
                labelString: "Assignments",
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

export default Classwork;
