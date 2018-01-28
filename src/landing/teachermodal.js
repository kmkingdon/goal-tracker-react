import React from 'react';
import { Link} from 'react-router-dom'
import Modal from 'react-modal';
import '../style/main.css';

class TeacherModal extends React.Component {
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
        isOpen={this.props.modal1IsOpen}
        onRequestClose={this.props.closeModal1}
        className={{
          base: 'modal'
        }}
        contentLabel="Teacher Sign-in"
        >
          <h2>Teacher Login</h2>
          <img src="./assets/close.png" alt="close" onClick={this.props.closeModal1}/>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="username"> Username</label>
            <input name="username" placeholder="Demoteacher" />
            <label htmlFor="password"> Password</label>
            <input name="password" placeholder="1234"/>
          </form>
          <Link to="/Teacher">
            <div> Login </div>
          </Link>
          <p>As a demo app, no username or password necesarry.</p>
        </Modal>
    )
  }
}

export default TeacherModal;
