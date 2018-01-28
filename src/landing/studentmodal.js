import React from 'react';
import { Link} from 'react-router-dom'
import Modal from 'react-modal';
import '../style/main.css';

class StudentModal extends React.Component {
  constructor (props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modal2IsOpen}
        onRequestClose={this.props.closeModal2}
        className={{
          base: 'modal'
        }}
        contentLabel="Student Sign-in"
        >
          <h2>Student Login</h2>
          <img src="./assets/close.png" alt="close" onClick={this.props.closeModal2}/>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username"> Username</label>
            <input name="username" placeholder="Demostudent" />
            <label htmlFor="password"> Password</label>
            <input name="password" placeholder="1234"/>
          </form>
          <Link to="/Student">
            <div> Login </div>
          </Link>
          <p>As a demo app, no username or password necesarry.</p>
        </Modal>
    )
  }
}

export default StudentModal;
