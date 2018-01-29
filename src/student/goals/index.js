import React from 'react';
import GoalButton from './goalbutton';
import Classwork from '../data/classwork';
import Homework from '../data/homework';
import Projects from '../data/projects';
import Assessments from '../data/assessments';


class Goals extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      goalId:0
    };
    this.handleClick = this.handleClick.bind(this);
    this.showGoal = this.showGoal.bind(this);
  }

  handleClick(e) {
    this.setState({goalId:e.target.id});

    let classwork = document.getElementById('classwork');
    let homework = document.getElementById('homework');
    let projects = document.getElementById('projects');
    let assessments = document.getElementById('assessments');

    const elementArray= [ classwork, homework, projects, assessments];
    elementArray.forEach(element => {
      if(element.classList.contains('hidden') === false) {
        element.classList.add('hidden');
      }
    })

    let currentData = e.target.innerHTML.toLowerCase();
    let currentGraph = document.getElementById(currentData);
    currentGraph.classList.remove('hidden');

    this.showGoal()
  }

  showGoal() {
    let goalData= [];
    this.props.goals.forEach(goal => {
      console.log(goal.id);
      console.log(this.state.goalId);
      if(goal.id === this.state.goalId) {
        goalData.push(goal);
      }
    })
    console.log(goalData);
  }

  render() {
    return (
      <div id="goals" className="hidden">
        <div className="goals-container">
          <div className= "goals-dashboard" >
            <h1> Smart Goals </h1>
            <div className="current-goals">
              <h2> Current Goals:</h2>
              {this.props.goals.map(goal => <GoalButton key={goal.id} goal={goal} handleClick={this.handleClick}/>)}
            </div>
            <button id="add">Add Goal </button>
          </div>
          <div className= "goal-view">
          </div>
          <div className= "data">
            <Classwork assignments={this.props.assignments}/>
            <Homework assignments={this.props.assignments}/>
            <Projects assignments={this.props.assignments}/>
            <Assessments assignments={this.props.assignments} />
          </div>
        </div>
      </div>
    )
  }
}

export default Goals;
