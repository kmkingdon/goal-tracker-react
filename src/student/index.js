import React from 'react';
import '../style/reset.css';
import '../style/student.css';
import Header from '../header.js'
import AddAssignments from './addassignments/index.js';
import SeeAssignments from './seeassignments/index.js';
import Data from './data/index';
import Goals from './goals/index';


class Student extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      goals:[],
      assignments:[],
      currentView:'seeassignments',
      modalIsOpen: false,
      assignmentData: [],
    };
    this.handleAddAssignments = this.handleAddAssignments.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteAssignment = this.deleteAssignment.bind(this);
    this.saveGoal = this.saveGoal.bind(this);
    this.removeConfirmation = this.removeConfirmation.bind(this);
    this.handleClickEdit= this.handleClickEdit.bind(this);
    this.closeModal= this.closeModal.bind(this);
    this.deleteGoal= this.deleteGoal.bind(this);
    this.saveReflection = this.saveReflection.bind(this);
  }

  componentDidMount() {

    fetch('https://goaltrackerdb.herokuapp.com/goals')
      .then(response => response.json())
      .then(response => this.setState({goals:response.goals}));

    fetch('https://goaltrackerdb.herokuapp.com/assignments')
      .then(response => response.json())
      .then(response => this.setState({assignments:response.assignments}));
  }

  selectView(viewName) {
    this.setState({currentView: viewName});
  }

  //addassignments functions
  handleAddAssignments(e) {
    e.preventDefault();
    let assignmentArray= [];
    let confirmation = document.getElementById('confirmation');

    if(e.target[0].value !== '') {
      let assignment = {
        number: e.target[0].value,
        name: e.target[1].value,
        type: e.target[2].value,
        dueDate: e.target[3].value,
        pointsPossible: e.target[4].value,
        pointsEarned: e.target[5].value,
        students_id: 1
      }
      assignmentArray.push(assignment);
    }

    if(e.target[6].value !== '') {
      let assignment = {
        number: e.target[6].value,
        name: e.target[7].value,
        type: e.target[8].value,
        dueDate: e.target[9].value,
        pointsPossible: e.target[10].value,
        pointsEarned: e.target[11].value,
        students_id: 1
      }
      assignmentArray.push(assignment);
    }

    if(e.target[12].value !== '') {
      let assignment = {
        number: e.target[12].value,
        name: e.target[13].value,
        type: e.target[14].value,
        dueDate: e.target[15].value,
        pointsPossible: e.target[16].value,
        pointsEarned: e.target[17].value,
        students_id: 1
      }
      assignmentArray.push(assignment);
    }

    if(e.target[18].value !== '') {
      let assignment = {
        number: e.target[18].value,
        name: e.target[19].value,
        type: e.target[20].value,
        dueDate: e.target[21].value,
        pointsPossible: e.target[22].value,
        pointsEarned: e.target[23].value,
        students_id: 1
      }
      assignmentArray.push(assignment);
    }

    if(e.target[24].value !== '') {
      let assignment = {
        number: e.target[24].value,
        name: e.target[25].value,
        type: e.target[26].value,
        dueDate: e.target[27].value,
        pointsPossible: e.target[28].value,
        pointsEarned: e.target[29].value,
        students_id: 1
      }
      assignmentArray.push(assignment);
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
          let updatedAssignments = this.state.assignments;
          updatedAssignments.push(response.assignments);
          this.setState({assignments:updatedAssignments});
        })
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

  //seeassignments functions
  closeModal(event) {
    this.setState({modalIsOpen: false});
  }

  handleClickEdit(e) {
    this.setState({modalIsOpen: true});
    let assignmentAPI = 'https://goaltrackerdb.herokuapp.com/assignments/'+ e.target.id;
    fetch(assignmentAPI)
      .then(response => response.json())
      .then(response => this.setState({assignmentData:response.student}));
  }

  deleteAssignment(id) {
    let assignmentsNew= this.state.assignments;
    let indexSplice;
    assignmentsNew.forEach((assignment,index) => {
      if(assignment.id === id){
        indexSplice = index;
      }
    })
    assignmentsNew.splice(indexSplice,1);
    this.setState({assignments: assignmentsNew})

    let deleteAPI = "https://goaltrackerdb.herokuapp.com/assignments/" + id;

    fetch(deleteAPI, {
      method: "DELETE",
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
      .then(this.closeModal())
  }

  handleSubmit(e, id){
    e.preventDefault();
    const update = new FormData(e.target);
    const assignment = {
      number: update.get("number"),
      name: update.get("name"),
      type: update.get("type"),
      dueDate: update.get("dueDate"),
      pointsPossible: update.get("pointsPossible"),
      pointsEarned: update.get("pointsEarned"),
      students_id: 1
    };


    let putAPI = "https://goaltrackerdb.herokuapp.com/assignments/" + id;
    fetch(putAPI, {
      method: "PUT",
      body: JSON.stringify(assignment),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(response => {
        let assignmentsNew= this.state.assignments;
        let indexSplice;
        assignmentsNew.forEach((assignment,index) => {
          if(assignment.id === id){
            indexSplice = index;
          }
        })
        assignmentsNew.splice(indexSplice, 1, response.assignments);
        this.setState({assignments: assignmentsNew})
      })
      .catch(error => console.error("Error:", error))
      .then(this.closeModal());
  }

  //goal functions
  saveGoal(e) {
    e.preventDefault();
    const goal = new FormData(e.target);
    const newGoal = {
      type: goal.get("type"),
      specific: goal.get("specific"),
      measurable: goal.get("measurable"),
      achievable: goal.get("achievable"),
      relevant: goal.get("relevant"),
      time: goal.get("time"),
      teacherReview: '',
      studentReflection: '',
      students_id: 1
    };

    fetch('https://goaltrackerdb.herokuapp.com/goals', {
      method: "POST",
      body: JSON.stringify(newGoal),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(response => {
        let goalArray = this.state.goals;
        goalArray.push(response.goals);
        this.setState({goals:goalArray});
      })
      .catch(error => console.error("Error:", error))

    e.target.reset();
  }

  deleteGoal(id) {
    let goalsNew= this.state.goals;
    let indexSplice;
    goalsNew.forEach((goal,index) => {
      if(goal.id === id){
        indexSplice = index;
      }
    })
    goalsNew.splice(indexSplice,1);
    this.setState({goals: goalsNew})

    let deleteAPI = "https://goaltrackerdb.herokuapp.com/goals/" + id;

    fetch(deleteAPI, {
      method: "DELETE",
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
  }

  saveReflection(event, id) {
    event.preventDefault();

    const reflection = new FormData(event.target);
    const newReflection= {
      studentReflection: reflection.get('reflection'),
    }

    let putAPI = "https://goaltrackerdb.herokuapp.com/goals/" + id;

    fetch(putAPI, {
      method: "PUT",
      body: JSON.stringify(newReflection),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(response => {
        let goalsNew= this.state.goals;
        let indexSplice;
        goalsNew.forEach((goal,index) => {
          if(goal.id === id){
            indexSplice = index;
          }
        })
        goalsNew.splice(indexSplice,1,response.goals);
        this.setState({goals: goalsNew})
      })
      .catch(error => console.error("Error:", error))

    event.target.reset();
  }


  render() {
    return (
      <div className="student">
        <Header />
        <div className="dashboard">
          <img src="./assets/avatar.jpg" alt="avatar"/>
          <h1>Name</h1>
          <button onClick={() => this.selectView('seeassignments')}> SEE ASSIGNMENTS</button>
          <button onClick={() => this.selectView('addassignments')}> ADD ASSIGNMENTS</button>
          <button onClick={() => this.selectView('goals')}> SEE/ADD GOALS</button>
          <button onClick={() => this.selectView('data')}> SEE DATA TRENDS</button>
        </div>
        <div className="display">
          <SeeAssignments assignmentData={this.state.assignmentData} modalIsOpen={this.state.modalIsOpen} handleClickEdit={this.handleClickEdit} closeModal={this.closeModal} deleteAssignment={this.deleteAssignment} handleSubmit={this.handleSubmit} active={this.state.currentView === 'seeassignments'} assignments={this.state.assignments} updateData={this.updateData} />
          <AddAssignments assignments={this.state.assignments} active={this.state.currentView === 'addassignments'} handleSubmit={this.handleAddAssignments}/>
          <Goals  saveReflection={this.saveReflection} deleteGoal={this.deleteGoal} saveGoal={this.saveGoal} active={this.state.currentView === 'goals'} assignments={this.state.assignments} goals={this.state.goals}/>
          <Data active={this.state.currentView === 'data'} assignments={this.state.assignments}/>
        </div>
      </div>
    )
  }
}

export default Student;
