import React from 'react';
import GoalButton from '../student/goals/goalbutton';
import GoalTeacherView from './goalteacherview';

class GoalSection extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      goalView:''
    };
    this.setGoalView = this.setGoalView.bind(this);
  }

  setGoalView(viewName) {
    this.setState({goalView: viewName});
  }

  render() {
    return (
      <div id="goal-teacher" className={(this.props.active ? ' ' : 'hidden')} >
        <div className="goal-teacher-display">
          <div className="goal-menu">
            <h2>Current Goals:</h2>
            <div className="button-container">
              {this.props.goals.map(goal => <GoalButton key={goal.id} goal={goal} setGoalView={this.setGoalView} setDataView={this.props.setDataView}/>)}
            </div>
          </div>
          {this.props.goals.map(goal => <GoalTeacherView key={goal.id} goal={goal} active={this.state.goalView === goal.id} saveComment={this.props.saveComment}/>)}
        </div>
      </div>
    )
  }
}

export default GoalSection;
