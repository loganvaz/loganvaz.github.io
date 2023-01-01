import React from 'react';
import './Footer.css';
import { Button } from './Button';
import BrightnessMediumTwoToneIcon from '@mui/icons-material/BrightnessMediumTwoTone';
import { Link } from 'react-router-dom';

function Footer() {
  /*

        <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
  */

  
  
  return (
    <div className='footer-container'>

      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Official</h2>
            <Link to='/sign-up'>LinkedIn</Link>
            <Link to='/'>Github</Link>
            <Link to='/'>Resume</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Personal</h2>
            <Link to='/'>Website</Link>
            <Link to='/'>Contact Me</Link>
            <Link to='/'>Instagram</Link>
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
    </div>
  );
}

export default Footer;