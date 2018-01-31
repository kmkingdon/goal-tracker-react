import React from 'react';
import Modal from 'react-modal';


const ModalEdit = (props)=> {
    let date;
    if(props.assignmentData.dueDate !== undefined){
      date= props.formatDate(props.assignmentData.dueDate);
    }

    return (
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={props.closeModal}
        className={{
          base: 'modal-edit'
        }}
        contentLabel="Edit Assignment"
        >
          <h2>Edit Assignment</h2>
          <img src="./assets/close.png" alt="close" onClick={(event)=>{props.closeModal(event)}}/>
          <form onSubmit={(event, id)=>{props.handleSubmit(event, props.assignmentData.id)}}>
          <label htmlFor="number"> Assignment Number </label>
          <input name="number"/>
            <label htmlFor="name"> Assignment Name </label>
            <input name="name"/>
            <label htmlFor="type"> Type</label>
            <select name="type">
              <option value="" disabled>Select a Type</option>
              <option value="Classwork">Classwork</option>
              <option value="Homework">Homework</option>
              <option value="Projects">Projects</option>
              <option value="Assessments">Assessments</option>
            </select>
            <label htmlFor="dueDate"> Due Date</label>
            <input type="date" name="dueDate"/>
            <label htmlFor="pointsPossible"> Points Possible</label>
            <input type="number" name="pointsPossible"/>
            <label htmlFor="pointsEarned"> Points Earned</label>
            <input type="number" name="pointsEarned" />
            <input id="submit" type="Submit" defaultValue="Save Changes"/>
          </form>
          <div className="old-data">
            <h3>Original Assignment Data</h3>
            <h4>Assignment Number:</h4>
            <p> {props.assignmentData.number}</p>
            <h4>Assignment Name:</h4>
            <p> {props.assignmentData.name}</p>
            <h4>Assignment Type:</h4>
            <p> {props.assignmentData.type}</p>
            <h4>Assignment Due Date:</h4>
            <p> {date} </p>
            <h4>Assignment Points Possible:</h4>
            <p> {props.assignmentData.pointsPossible}</p>
            <h4>Assignment Points Earned:</h4>
            <p> {props.assignmentData.pointsEarned}</p>
          </div>
          <button onClick={(id)=>{props.deleteAssignment(props.assignmentData.id)}} id="delete">Delete Assignment</button>
        </Modal>
    )
}

export default ModalEdit;
