import React from 'react';
import { Link} from 'react-router-dom';

const Header= (props)=> {
  return (
    <div className="header">
      <Link id="logo" to="/"><img src="./assets/goaltrackerlogo.png" alt="logo"/></Link>
      <Link id="logout" to="/"><div>Logout</div></Link>
    </div>
  );
}

export default Header;
