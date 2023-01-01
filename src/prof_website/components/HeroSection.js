import React, {useEffect, useState} from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Cards from './Cards';
import Resume from './Resume';

function HeroSection({inside_content}) {

  const [min_width, change_min_width] = useState(-1);
  // const [resume_show, change_resume_view] = useState(false);



  const resize_buttons = () => {
    let w1 = document.getElementById("personal_projects_button").getBoundingClientRect().width;
    let w2 = document.getElementById("show_resume_button").getBoundingClientRect().width;
    let max_w = w1 > w2 ? w1 : w2;
    max_w = max_w > .175*window.screen.width ? .175*window.screen.width : max_w;
    change_min_width(max_w);

  }

  useEffect( () => { resize_buttons();
    
  });

  //<video src='prof_videos/video.mp4' autoPlay loop muted />
  return (
    <div className = "background-image-hero-container">
    <div className='hero-container'>
    
        
        <h1>Logan Vaz</h1>
        <p style = {{marginBottom: '2vh'}}> <br></br>UT CSB | Class of 2025 <br></br></p>
        <div className='hero-btns'>
      
      
              <Button
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                go_to = "#personal_projects_head"
                button_id = "personal_projects_button"
                width = {min_width}
                
              >
                Personal Projects
              </Button>

              <Button
                className='btns'
                buttonStyle='btn--primary'
                buttonSize='btn--large'
                //onClick={ () => {console.log("changing to view"); change_resume_view(true)}}
                width = {min_width}
                button_id = "show_resume_button"
                go_to = "/resume"
              >
              See Resume<i className='far fa-play-circle' />

              </Button>

       

          
        </div>
  
     
    </div>

    <div id = "about_me">
      This is the about me section. etc. etc.
    </div>
    
    <div id = "card_holder" className = "lightly_shadowed">
    <Cards />
    </div>
   

    
    
    </div>
    
  
  );
}

export default HeroSection;