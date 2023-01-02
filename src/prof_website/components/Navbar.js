import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function Navbar() {

  const reset_view = () => {
    window.scrollTo({top: 0, behavior: 'instant'});
  }

  const open_email_form = () => {
    window.open('mailto:loganvaz03@gmail.com?subject=Subject&body=Body%20goes%20here')
  }

  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {setClick(false); reset_view() }

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
      closeMobileMenu();
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            LJFV
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> <MenuRoundedIcon style = {{color: 'white'}}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/resume'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/stories'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Stories
              </Link>
            </li>

            <li>
              <Link
                className='nav-links-mobile'
                onClick={ () => { open_email_form();closeMobileMenu();}}
              >
                Contact Me
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' onClick = { () => {open_email_form()}}>Contact Me</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
