import React from 'react';
import '../style/reset.css';
import '../style/student.css';


class AddAssignments extends React.Component {
  constructor(props){
    super(props);
    this.state= {

    };
  }



  render() {
    return (
      <div id="add" className="hidden">
        <div >
          <p> add assignments </p>
        </div>
      </div>
    )
  }
}

export default AddAssignments;
