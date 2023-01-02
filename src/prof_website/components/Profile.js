import React from 'react'
import './Profile.css';

//TODO - add picture 
function Profile() {

    const skills = [["multiprocessing","dynamic programming"],["C++"], [ "python", "machine learning"] ]

  return (
    <div className = "profile_container">
        <br/>
      <div className = "profile_title" style = {{color: "white", fontSize:'6vh' }}>
        About Me
      </div>
      <br/>

      <div className = "profile_picture_container">
      </div>

      <div className = "profile_text_container">
        Hello! <br/> <br/>
        My name is Logan Vaz. I'm a student at The University of Texas at Austin currently enrolled in the CSB computer science and business double major honors program. <br /> <br />
        As a computer scientist, I am extremely interested in machine learning and systems design, and how we can apply computer science/mathematical principles to make human lives easier. <br /> <br />
        Thank you for coming to this website; below I've included a short list of technical skills I've used recently:
      </div>
      <br />

      <div className = "profile_skill_container" style = {{color: 'white'}}>
        <span id = "profile_skill_subtitle"></span>
        {
            skills.map( (skill_set) =>
                <div className = "profile_skill_set">
                    {skill_set.map( (str) => 
                    <div className = "profile_skills" >
                        {str}
                    </div>
                    )
                    } 
                
                
                </div>
            
               
            )
        }
      
      </div>
    </div>

  )
}

export default Profile
