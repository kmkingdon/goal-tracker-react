import React from 'react';
import AllAssignments from '../student/data/allassignments';
import FinalGrade from '../student/data/finalgrade';
import Classwork from '../student/data/classwork';
import Homework from '../student/data/homework';
import Projects from '../student/data/projects';
import Assessments from '../student/data/assessments';

class DataSection extends React.Component {
  constructor(props){
    super(props);
    this.state= {
    };
  }



  render() {
    return (
      <div id="data-teacher" className={(this.props.active ? ' ' : 'hidden')}>
        <div className="data-teacher-display">
          <div className="data-menu">
            <h2>Data Views:</h2>
            <div className="button-container">
              <button onClick={() => this.props.setDataView('allassignments')} >All Assignments</button>
              <button onClick={() => this.props.setDataView('finalgrade')}>Total Grade</button>
              <button onClick={() => this.props.setDataView('classwork')}>Classwork Data</button>
              <button onClick={() => this.props.setDataView('homework')}>Homework Data</button>
              <button onClick={() => this.props.setDataView('projects')}>Projects Data</button>
              <button onClick={() => this.props.setDataView('assessments')}>Assessments Data</button>
            </div>
          </div>
          <div className="teacher-data-view">
            <AllAssignments active={this.props.dataView === 'allassignments'} assignments={this.props.assignments}/>
            <FinalGrade  active={this.props.dataView  === 'finalgrade'} assignments={this.props.assignments}/>
            <Classwork  active={this.props.dataView  === 'classwork'}  assignments={this.props.assignments}/>
            <Homework  active={this.props.dataView  === 'homework'} assignments={this.props.assignments}/>
            <Projects  active={this.props.dataView  === 'projects'} assignments={this.props.assignments}/>
            <Assessments  active={this.props.dataView  === 'assessments'} assignments={this.props.assignments}/>
          </div>
        </div>
      </div>
    )
  }
}

export default DataSection;
