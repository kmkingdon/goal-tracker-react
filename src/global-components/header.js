import React from 'react';
import { Link} from 'react-router-dom';

function Header = ()=> {
  return (
    <div className="header">
      <Link to="/"><img src="./assets/goaltrackerlogo.png" alt="logo"/></Link>
    </div>
  );
}

export default Header;
