import React from 'react';
import Modal from 'react-modal';
import '../../style/reset.css';
import '../../style/student.css';
import AssignmentObject from './assignmentobject'
import ModalEdit from './modaledit';


class SeeAssignments extends React.Component {
  constructor(props){
    super(props);
    this.state= {
    };
    this.colorFinal= this.colorFinal.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement(".see-assignments");
  }


  colorFinal() {
    let pArray = document.querySelectorAll('.final');

    pArray.forEach(p => {
      if(p.innerHTML.split('%')[0] >= 90){
        p.style.backgroundColor = "rgb(0, 153, 255)";
      } else if(p.innerHTML.split('%')[0] >= 80 && p.innerHTML.split('%')[0] < 90){
        p.style.backgroundColor = "rgb(0, 204, 102)";
      } else if(p.innerHTML.split('%')[0] >= 70 && p.innerHTML.split('%')[0] < 80){
        p.style.backgroundColor = "rgb(255, 255, 102)";
      } else if(p.innerHTML.split('%')[0] >= 60 && p.innerHTML.split('%')[0] < 70){
        p.style.backgroundColor = "rgb(255, 153, 51)";
      } else if(p.innerHTML.split('%')[0] <= 59){
        p.style.backgroundColor = "rgb(255, 80, 80)";
      }
    });
  }


  render() {
    return (
      <div id="see" className={(this.props.active ? ' ' : 'hidden')}>
        <div className="see-assignments">
          <h1> Assignment Log </h1>
          <div className="assignment-container">
            <div className="assignment-header">
              <h1>Number</h1>
              <h2>Name</h2>
              <h3>Type</h3>
              <h4>Due Date</h4>
              <h5>Points Possible</h5>
              <h6>Points Earned</h6>
              <p>Final Grade</p>
              <button>Edit</button>
            </div>
            {this.props.assignments.map(a => <AssignmentObject key={a.name} assignment={a} handleClick={this.props.handleClickEdit} finalColor={this.colorFinal}/> )}
          </div>
          <div className="assignment-key">
            <img src="./assets/gradekey.jpg" alt="gradekey"/>
          </div>
        </div>
        <ModalEdit deleteAssignment={this.props.deleteAssignment} handleSubmit={this.props.handleSubmit} openModal={this.props.handleClickEdit} closeModal={this.props.closeModal} modalIsOpen={this.props.modalIsOpen} assignmentData={this.props.assignmentData}/>
      </div>
    )
  }
}

export default SeeAssignments;
