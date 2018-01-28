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
            <li>sample text</li>
            <li>sample text</li>
            <li>sample text</li>
          </ul>
        </div>
        <div onClick={this.handleDataClick} className="datatracking-image">
          <img src="./assets/datatracking.png" alt="smartgoals" />
        </div>
        <div onClick={this.handleDataClick} className="datatracking-info">
          <h1> Data Tracking </h1>
          <ul>
            <li>sample text</li>
            <li>sample text</li>
            <li>sample text</li>
          </ul>
        </div>
        <div onClick={this.handleFutureClick} className="future-image">
          <img src="./assets/future.png" alt="smartgoals" />
        </div>
        <div onClick={this.handleFutureClick} className="future-info">
          <h1> Future Features </h1>
          <ul>
            <li>sample text</li>
            <li>sample text</li>
            <li>sample text</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default About;
