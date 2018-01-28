import React from 'react';
import '../style/reset.css';
import '../style/student.css';


class Goals extends React.Component {
  constructor(props){
    super(props);
    this.state= {

    };
  }



  render() {
    return (
      <div id="goals" className="hidden">
        <div >
          <p> goals </p>
        </div>
      </div>
    )
  }
}

export default Goals;
