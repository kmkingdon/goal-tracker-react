import React from 'react';
import Modal from 'react-modal';
import '../style/reset.css';
import '../style/student.css';
import AssignmentObject from './assignmentobject'
import ModalEdit from './modaledit';


class SeeAssignments extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      modalIsOpen: false,
      assignmentData: [],
    };
    this.handleClickEdit= this.handleClickEdit.bind(this);
    this.closeModal= this.closeModal.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement(".see-assignments");
  }

  handleClickEdit(e) {
    this.setState({modalIsOpen: true});
    let assignmentAPI = 'https://goaltrackerdb.herokuapp.com/assignments/'+ e.target.id;
    fetch(assignmentAPI)
      .then(response => response.json())
      .then(response => this.setState({assignmentData:response.student}));
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <div id="see" >
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
            {this.props.assignments.map(a => <AssignmentObject key={a.name} assignment={a} handleClick={this.handleClickEdit} /> )}
          </div>
          <div className="assignment-key">
            <img src="./assets/gradekey.jpg" alt="gradekey"/>
          </div>
        </div>
        <ModalEdit openModal={this.handleClickEdit} closeModal={this.closeModal} modalIsOpen={this.state.modalIsOpen} assignmentData={this.state.assignmentData} updateData={this.props.updateData}/>
      </div>
    )
  }
}

export default SeeAssignments;
