import React from 'react';
import Modal from 'react-modal';


class ModalEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state= {
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteAssignment= this.deleteAssignment.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const update = new FormData(e.target);
    const assignment = {
      name: update.get("name"),
      type: update.get("type"),
      dueDate: update.get("dueDate"),
      pointsPossible: update.get("pointsPossible"),
      pointsEarned: update.get("pointsEarned"),
      students_id: 1
    };

    let putAPI = "https://goaltrackerdb.herokuapp.com/assignments/" + this.props.assignmentData.id;
    fetch(putAPI, {
      method: "PUT",
      body: JSON.stringify(assignment),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response))
      .then(this.props.updateData())
      .then(this.props.closeModal());
  }

  deleteAssignment() {
    let deleteAPI = "https://goaltrackerdb.herokuapp.com/assignments/" + this.props.assignmentData.id;
    fetch(deleteAPI, {
      method: "DELETE",
      })
      .then(response => response.json())
      .catch(error => console.error("Error:", error))
      .then(response => console.log("Success:", response))
      .then(this.props.updateData())
      .then(this.props.closeModal());
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modalIsOpen}
        onRequestClose={this.props.closeModal}
        className={{
          base: 'modal-edit'
        }}
        contentLabel="Edit Assignment"
        >
          <h2>Edit Assignment</h2>
          <img src="./assets/close.png" alt="close" onClick={this.props.closeModal}/>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name"> Assignment Name </label>
            <input name="name" placeholder={this.props.assignmentData.name}/>
            <label htmlFor="type"> Type</label>
            <select name="type">
              <option value="">Select a Type</option>
              <option value="Classwork">Classwork</option>
              <option value="Homework">Homework</option>
              <option value="Projects">Projects</option>
              <option value="Assessments">Assessments</option>
            </select>
            <label htmlFor="dueDate"> Due Date</label>
            <input type="date" name="dueDate"/>
            <label htmlFor="pointsPossible"> Points Possible</label>
            <input type="number" name="pointsPossible" placeholder={this.props.assignmentData.pointsPossible}/>
            <label htmlFor="pointsEarned"> Points Earned</label>
            <input type="number" name="pointsEarned" placeholder={this.props.assignmentData.pointsEarned}/>
            <input id="submit" type="Submit" value="Save Changes"/>
          </form>
          <button onClick={this.deleteAssignment} id="delete">Delete Assignment</button>
        </Modal>
    )
  }
}

export default ModalEdit;
