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
      students:{},
      goals:[],
      assignments:[],
    };
    this.updateData= this.updateData.bind(this);
  }

  componentDidMount() {
    fetch('https://goaltrackerdb.herokuapp.com/students')
      .then(response => response.json())
      .then(response => this.setState({students:response.students}))

    fetch('https://goaltrackerdb.herokuapp.com/goals')
      .then(response => response.json())
      .then(response => this.setState({goals:response.goals}));

    fetch('https://goaltrackerdb.herokuapp.com/assignments')
      .then(response => response.json())
      .then(response => this.setState({assignments:response.assignments}));
  }

  handleClickSeeAssignments() {
    const see = document.getElementById('see');
    const add = document.getElementById('add');
    const goal = document.getElementById('goals');
    const data = document.getElementById('data');

    const elementArray= [ see , add, goal, data];


    elementArray.forEach(element => {
      if(element.classList.contains('hidden') === false) {
        element.classList.add('hidden');
        document.getElementById('see').classList.toggle('hidden')
      }
    })
  }

  handleClickAddAssignments() {
    const see = document.getElementById('see');
    const add = document.getElementById('add');
    const goal = document.getElementById('goals');
    const data = document.getElementById('data');

    const elementArray= [ see , add, goal, data];

    elementArray.forEach(element => {
      if(element.classList.contains('hidden') === false) {
        element.classList.add('hidden');
        document.getElementById('add').classList.toggle('hidden')
      }
    })
  }

  handleClickSeeGoals() {
    const see = document.getElementById('see');
    const add = document.getElementById('add');
    const goal = document.getElementById('goals');
    const data = document.getElementById('data');

    const elementArray= [ see , add, goal, data];

    elementArray.forEach(element => {
      if(element.classList.contains('hidden') === false) {
        element.classList.add('hidden');
        document.getElementById('goals').classList.toggle('hidden')
      }
    })
  }

  handleClickSeeData() {
    const see = document.getElementById('see');
    const add = document.getElementById('add');
    const goal = document.getElementById('goals');
    const data = document.getElementById('data');

    const elementArray= [ see , add, goal, data];

    elementArray.forEach(element => {
      if(element.classList.contains('hidden') === false) {
        element.classList.add('hidden');
        document.getElementById('data').classList.toggle('hidden')
      }
    })
  }

  updateData() {
    fetch('https://goaltrackerdb.herokuapp.com/assignments')
      .then(response => response.json())
      .then(response => this.setState({assignments:response.assignments}));
  }

  render() {
    return (
      <div className="student">
        <Header />
        <div className="dashboard">
          <img src="./assets/avatar.jpg" alt="avatar"/>
          <h1>Name {this.state.students.name}</h1>
          <button onClick={this.handleClickSeeAssignments}> SEE ASSIGNMENTS</button>
          <button onClick={this.handleClickAddAssignments}> ADD ASSIGNMENTS</button>
          <button onClick={this.handleClickSeeGoals}> SEE/ADD GOALS</button>
          <button onClick={this.handleClickSeeData}> SEE DATA TRENDS</button>
        </div>
        <div className="display">
          <SeeAssignments assignments={this.state.assignments} updateData={this.updateData} />
          <AddAssignments />
          <Goals assignments={this.state.assignments} goals={this.state.goals}/>
          <Data assignments={this.state.assignments}/>
        </div>
      </div>
    )
  }
}

export default Student;
