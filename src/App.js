import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Landing from './landing';
import Teacher from './teacher';
import Student from './student';
import './style/reset.css';
import './style/main.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Landing}/>
            <Route path="/Teacher" component={Teacher}/>
            <Route path="/Student" component={Student}/>
          </div>
        </Router>
    );
  }
}

export default App;
