import React from 'react';
import Header from '../header.js';
import '../style/reset.css';
import '../style/student.css';
import GoalSection from './goalsection';
import DataSection from './datasection';

class Teacher extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      goals:[],
      assignments:[],
      currentStudent:'',
      dataView:''
    };
    this.saveComment= this.saveComment.bind(this);
    this.setDataView = this.setDataView.bind(this);
  }

  componentDidMount() {

    fetch('https://goaltrackerdb.herokuapp.com/goals')
      .then(response => response.json())
      .then(response => this.setState({goals:response.goals}));

    fetch('https://goaltrackerdb.herokuapp.com/assignments')
      .then(response => response.json())
      .then(response => this.setState({assignments:response.assignments}));
  }

  selectView(event) {
    this.setState({currentStudent: event.target.value});
  }

  setDataView(viewName) {
    let type = viewName.toLowerCase();
    this.setState({dataView: type});
  }

  saveComment(event , id) {
    event.preventDefault();
    console.log(event);
    console.log(id);

    const review = new FormData(event.target);
    const newReview= {
      teacherReview: review.get('review'),
    }
    console.log(newReview);
    let putAPI = "https://goaltrackerdb.herokuapp.com/goals/" + id;

    fetch(putAPI, {
      method: "PUT",
      body: JSON.stringify(newReview),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error))

    event.target.reset();
  }

  render() {
    return (
      <div className="teacher">
        <Header />
        <div className="dashboard-teacher">
          <img src="./assets/avatar.jpg" alt="avatar"/>
          <h1>Name</h1>
          <form>
            <label htmlFor="class"> Select a Class</label>
            <select name="class">
              <option>First Period</option>
            </select>
            <label htmlFor="student"> Select a Student</label>
            <select name="student" onChange={(event)=>{this.selectView(event)}}>
              <option value="">Select a Student</option>
              <option value="1">Demo Student 1</option>
            </select>
          </form>
        </div>
        <div className="display-teacher">
          <GoalSection setDataView={this.setDataView} saveComment={this.saveComment} active={this.state.currentStudent === "1"} goals={this.state.goals}/>
          <DataSection dataView={this.state.dataView} setDataView={this.setDataView} active={this.state.currentStudent === "1"} assignments={this.state.assignments}/>
        </div>
      </div>
    )
  }
}

export default Teacher;
