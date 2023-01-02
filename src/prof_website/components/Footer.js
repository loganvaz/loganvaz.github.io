import React from 'react';
import './Footer.css';
import { Button } from './Button';
import BrightnessMediumTwoToneIcon from '@mui/icons-material/BrightnessMediumTwoTone';
import { Link } from 'react-router-dom';


function Footer() {

  const reset_view = () => {
    window.scrollTo({top: 0, behavior: 'instant'});
  }

  const route_external = (url) => {
    window.location.href = url;
  }

  const open_email_form = () => {
    window.open('mailto:loganvaz03@gmail.com?subject=Subject&body=Body%20goes%20here')
  }
  
  
  return (
    <div className='footer-container'>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Official</h2>
            <Link onClick= { () => {route_external("https://www.linkedin.com/in/logan-vaz-ut-austin/")}}>LinkedIn</Link>
            <Link onClick = { () => {route_external("https://github.com/loganvaz?tab=overview&from=2023-01-01&to=2023-01-01")}}>Github</Link>
            <Link to='/resume' onClick = {reset_view}>Resume</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Personal</h2>
            <Link to='/stories' onClick = {reset_view}>Stories</Link>
            <Link onClick= {open_email_form}>Contact Me</Link>
            <Link onClick = { () => {route_external("https://www.instagram.com/logan_vaz/")}}>Instagram</Link>
          </div>
        </div>

      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
            
              <BrightnessMediumTwoToneIcon /> {/*my icon */}
              
              <i className='fab fa-typo3' />
            </Link>
            <small className='website-rights'><span>LJV</span>  © <span>2022</span></small>
          </div>
        </div>
      </section>
      <div>
        <Link to = "/sources" style = {{position: 'absolute', left: '2vh', color: 'white', fontSize: '.75em'}}>Sources</Link>
      </div>
    </div>
  );
}

export default Footer;