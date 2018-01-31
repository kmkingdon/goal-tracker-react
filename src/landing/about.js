import React from 'react';
import '../style/main.css';


class About extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      goalDisplay: true,
      dataDisplay: true,
      futureDisplay: true,
    }
    this.handleGoalClick = this.handleGoalClick.bind(this);
    this.handleDataClick = this.handleDataClick.bind(this);
    this.handleFutureClick = this.handleFutureClick.bind(this);
  }

  handleGoalClick() {
    if(this.state.goalDisplay === true) {
      document.querySelector('.smartgoals-image').style.display = "none";
      document.querySelector('.smartgoals-info').style.display = "grid";
      this.setState({goalDisplay:false})
    } else {
      document.querySelector('.smartgoals-info').style.display = "none";
      document.querySelector('.smartgoals-image').style.display = "flex";
      this.setState({goalDisplay:true})
    }
  }

  handleDataClick() {
    if(this.state.dataDisplay === true) {
      document.querySelector('.datatracking-image').style.display = "none";
      document.querySelector('.datatracking-info').style.display = "grid";
      this.setState({dataDisplay:false})
    } else {
      document.querySelector('.datatracking-info').style.display = "none";
      document.querySelector('.datatracking-image').style.display = "flex";
      this.setState({dataDisplay:true})
    }
  }

  handleFutureClick() {
    if(this.state.futureDisplay === true) {
      document.querySelector('.future-image').style.display = "none";
      document.querySelector('.future-info').style.display = "grid";
      this.setState({futureDisplay:false})
    } else {
      document.querySelector('.future-info').style.display = "none";
      document.querySelector('.future-image').style.display = "flex";
      this.setState({futureDisplay:true})
    }
  }

  render() {
    return (
      <div className="about">
        <div onClick={this.handleGoalClick} className="smartgoals-image">
          <img  src="./assets/smartgoals.png" alt="smartgoals" />
        </div>
        <div onClick={this.handleGoalClick} className="smartgoals-info">
          <h1> Smart Goals </h1>
          <ul>
            <li>Smart Goal Format: Students easily add new smart goals following the specific, measurable, attainable, relevant, and time based format.</li>
            <li>Based on Data: As students make and reflect on their goals, the relevant data displays automatically allowing for data driven goals and reflections.</li>
            <li>Student/Teacher Communication: Teachers can send comments to each student goal and students can submit end of goal reflections.</li>
          </ul>
        </div>
        <div onClick={this.handleDataClick} className="datatracking-image">
          <img src="./assets/datatracking.png" alt="smartgoals" />
        </div>
        <div onClick={this.handleDataClick} className="datatracking-info">
          <h1> Data Tracking </h1>
          <ul>
            <li>Assignment Log: Students can enter and edit all of their graded assignments in an easy to maintain assignment log.</li>
            <li>Data Views: Students can view graphs of their progress that automatically populate based on their assignment log.</li>
            <li>Data View Types: All Assignments, Classwork Progress, Homework Progress, Projects Progress, Assessments Progress, and Total Grade Calculation.</li>
          </ul>
        </div>
        <div onClick={this.handleFutureClick} className="future-image">
          <img src="./assets/future.png" alt="smartgoals" />
        </div>
        <div onClick={this.handleFutureClick} className="future-info">
          <h1> Future Features </h1>
          <ul>
            <li>Multiple Students: Add an entire class of students with unique usernames and passwords.</li>
            <li>Expanded Teacher Options: Teachers can create unique classes with specific grading categories and weights.</li>
            <li>Expanded Student Options: Student goal reflections expanded to push student thinking about their goal accomplishments.</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default About;
