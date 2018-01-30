import React from 'react';
import GoalButton from './goalbutton';
import AddGoal from './addgoal';
import GoalView from './goalview';
import Classwork from '../data/classwork';
import Homework from '../data/homework';
import Projects from '../data/projects';
import Assessments from '../data/assessments';


class Goals extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      dataView:'',
      goalView:''
    };
    this.setDataView = this.setDataView.bind(this);
    this.setGoalView = this.setGoalView.bind(this);
    this.setDataPreview = this.setDataPreview.bind(this);
  }

  setDataView(viewName) {
    this.setState({dataView: viewName});
  }

  setGoalView(viewName) {
    this.setState({goalView: viewName});
  }

  setDataPreview(event) {
    this.setState({dataView: event.target.value });
  }


  render() {
    return (
      <div id="goals" className={(this.props.active ? ' ' : 'hidden')}>
        <div className="goals-container">
          <div className= "goals-dashboard" >
            <h1> Smart Goals </h1>
            <div className="current-goals">
              <h2> Current Goals:</h2>
              {this.props.goals.map(goal => <GoalButton key={goal.id} goal={goal} setDataView={this.setDataView} setGoalView={this.setGoalView}/>)}
            </div>
            <button onClick={() => {this.setDataView(''); this.setGoalView('add')}} id="add">Add Goal </button>
          </div>
          <div className= "goal-view">
            {this.props.goals.map(goal => <GoalView deleteGoal={this.props.deleteGoal} key={goal.id} goal={goal} active={this.state.goalView === goal.id} saveReflection={this.props.saveReflection}/>)}
            <AddGoal saveGoal={this.props.saveGoal} setDataPreview={this.setDataPreview} active={this.state.goalView === "add"}/>
          </div>
          <div className= "data">
            <Classwork assignments={this.props.assignments} active={this.state.dataView === 'Classwork'}/>
            <Homework assignments={this.props.assignments} active={this.state.dataView === 'Homework'}/>
            <Projects assignments={this.props.assignments} active={this.state.dataView === 'Projects'}/>
            <Assessments assignments={this.props.assignments} active={this.state.dataView === 'Assessments'}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Goals;
