import React from 'react';
import AddForm from './addform.js';

class AddAssignments extends React.Component {
  constructor(props){
    super(props);
    this.state= {

    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeConfirmation= this.removeConfirmation.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let assignmentArray= [];
    let confirmation = document.getElementById('confirmation');

    if(e.target[0].value !== '') {
      let assignment = {
        name: e.target[0].value,
        type: e.target[1].value,
        dueDate: e.target[2].value,
        pointsPossible: e.target[3].value,
        pointsEarned: e.target[4].value,
        students_id: 1
      }
      assignmentArray.unshift(assignment);
    }

    if(e.target[5].value !== '') {
      let assignment = {
        name: e.target[5].value,
        type: e.target[6].value,
        dueDate: e.target[7].value,
        pointsPossible: e.target[8].value,
        pointsEarned: e.target[9].value,
        students_id: 1
      }
      assignmentArray.unshift(assignment);
    }

    if(e.target[10].value !== '') {
      let assignment = {
        name: e.target[10].value,
        type: e.target[11].value,
        dueDate: e.target[12].value,
        pointsPossible: e.target[13].value,
        pointsEarned: e.target[14].value,
        students_id: 1
      }
      assignmentArray.unshift(assignment);
    }

    if(e.target[15].value !== '') {
      let assignment = {
        name: e.target[15].value,
        type: e.target[16].value,
        dueDate: e.target[17].value,
        pointsPossible: e.target[18].value,
        pointsEarned: e.target[19].value,
        students_id: 1
      }
      assignmentArray.unshift(assignment);
    }

    if(e.target[20].value !== '') {
      let assignment = {
        name: e.target[21].value,
        type: e.target[22].value,
        dueDate: e.target[23].value,
        pointsPossible: e.target[24].value,
        pointsEarned: e.target[25].value,
        students_id: 1
      }
      assignmentArray.unshift(assignment);
    }

    assignmentArray.forEach(assignment => {
      fetch("https://goaltrackerdb.herokuapp.com/assignments/", {
        method: "POST",
        body: JSON.stringify(assignment),
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(response => response.json())
        .then(response => {
          confirmation.innerHTML = "Success! Assignments Added!";
        })
        .then(setTimeout(this.removeConfirmation, 4000))
        .catch(error => console.error("Error:", error))
    })

    e.target.reset();
  }

  removeConfirmation() {
    let confirmation = document.getElementById('confirmation');
    confirmation.innerHTML= "";
  }

  render() {
    return (
      <div id="add" className="hidden">
        <div className="add-assignments">
          <h1> Add Assignments</h1>
          <AddForm handleSubmit={this.handleSubmit}/>
          <p id="confirmation"> </p>
        </div>
      </div>
    )
  }
}

export default AddAssignments;
