import React from 'react';
import AddForm from './addform.js';

class AddAssignments extends React.Component {
  constructor(props){
    super(props);
    this.state= {
    };
  }


  render() {
    return (
      <div id="add" className={(this.props.active ? ' ' : 'hidden')}>
        <div className="add-assignments">
          <h1> Add Assignments</h1>
          <AddForm handleSubmit={this.props.handleSubmit}/>
          <p id="confirmation"> </p>
        </div>
      </div>
    )
  }
}

export default AddAssignments;
