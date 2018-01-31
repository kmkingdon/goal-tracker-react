import React from 'react';
import Modal from 'react-modal';
import '../style/reset.css';
import '../style/main.css';
import TeacherModal from './teachermodal'
import StudentModal from './studentmodal'
import About from './about';

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      modal1IsOpen: false,
      modal2IsOpen: false,
    };
    this.openModal1 = this.openModal1.bind(this);
    this.closeModal1 = this.closeModal1.bind(this);
    this.openModal2 = this.openModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);

  }

  componentDidMount() {
    Modal.setAppElement(".landing");
    
    //wake up server
    fetch('https://goaltrackerdb.herokuapp.com/goals')
      .then(response => response.json())
  }

  openModal1() {
    this.setState({modal1IsOpen: true});
  }
  closeModal1() {
    this.setState({modal1IsOpen: false});
  }
  openModal2() {
    this.setState({modal2IsOpen: true});
  }
  closeModal2() {
    this.setState({modal2IsOpen: false});
  }


  render() {
    return (
      <div className="landing">
        <div className="teacher-demo">
          <button onClick={this.openModal1}>Teacher Demo</button>
        </div>
        <div className="student-demo">
          <button onClick={this.openModal2}>Student Demo</button>
        </div>
        <div className="logo">
          <h1>SMART GOALS</h1>
          <img src="./assets/goaltrackerlogo.png" alt="logo"/>
          <h1>DATA TRACKING</h1>
        </div>
        <About />
        <TeacherModal openModal1={this.openModal1} closeModal1={this.closeModal1} modal1IsOpen={this.state.modal1IsOpen}/>
        <StudentModal openModal2={this.openModal2} closeModal2={this.closeModal2} modal2IsOpen={this.state.modal2IsOpen}/>
      </div>
    )
  }
}

export default Landing;
