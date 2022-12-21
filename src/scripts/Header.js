import React, {Component} from 'react';
import {Link} from 'react-router-dom';
function Header() {
    return (

    <header>
        
   

    <div className ="headerContent pageOption" id = "Stories">
        <Link className ="headerContent pageOption" to ="/stories" style={{ textDecoration: 'none' }}>Stories</Link>
    </div>

    <div className = "headerContent pageOption" id = "Code">
        <Link className ="headerContent pageOption" to ="/code" style={{ textDecoration: 'none' }}>Code</Link>
    </div>

    <div className ="headerContent pageOption" id = "HomePage">
        <Link className ="headerContent pageOption" to ="/" style={{ textDecoration: 'none' }}>HomePage</Link>
    </div>

    <div className = "headerContent pageOption" id = "Resume">
        <Link className ="headerContent pageOption" to ="/resume" style={{ textDecoration: 'none' }}>Resume</Link>
    </div>

    <div className = "headerContent pageOption" id = "Pictures">
        <Link className ="headerContent pageOption"to ="/pictures" style={{ textDecoration: 'none' }}>Pictures</Link>
    </div>



    
    
    
    </header>

    )
}

export default Header;