import React from 'react';
import AllAssignments from './allassignments';
import FinalGrade from './finalgrade';
import Classwork from './classwork';
import Homework from './homework';
import Projects from './projects';
import Assessments from './assessments';

class Data extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentView: ''
    };
  }

  selectView(viewName) {
    this.setState({currentView: viewName});
  }

  render() {
    return (
      <div id="data" className={(this.props.active ? ' ' : 'hidden')}>
        <div className="data-container">
          <h1> Data Trends </h1>
          <div className="data-buttons">
            <button onClick={() => this.selectView('allassignments')} >All Assignments</button>
            <button onClick={() => this.selectView('finalgrade')}>Total Grade</button>
            <button onClick={() => this.selectView('classwork')}>Classwork Data</button>
            <button onClick={() => this.selectView('homework')}>Homework Data</button>
            <button onClick={() => this.selectView('projects')}>Projects Data</button>
            <button onClick={() => this.selectView('assessments')}>Assessments Data</button>
          </div>
          <AllAssignments active={this.state.currentView === 'allassignments'} assignments={this.props.assignments}/>
          <FinalGrade  active={this.state.currentView === 'finalgrade'} assignments={this.props.assignments}/>
          <Classwork  active={this.state.currentView === 'classwork'}  assignments={this.props.assignments}/>
          <Homework  active={this.state.currentView === 'homework'} assignments={this.props.assignments}/>
          <Projects  active={this.state.currentView === 'projects'} assignments={this.props.assignments}/>
          <Assessments  active={this.state.currentView === 'assessments'} assignments={this.props.assignments}/>
        </div>
      </div>
    )
  }
}

export default Data;
