import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import the_img from "../images/course_planner.jpg";
import logical_img from '../images/logical_circuit.png';
import DoctorImg from '../images/hospital_at_home.jpg'
import FacialImg from '../images/face_recognition.png';
import SearchEngine from '../images/search_engine.png';

function Cards() {


  const route_external = (url) => {
    window.location.href = url;
  }

  return (
    <div className = "cards">

        <h1  id = "personal_projects_head" style = {{color: "white", fontSize:'6vh' }}>Personal Projects</h1>
        <div className = "cards__container">
            <div className = "cards__wrapper">
                <ul className = "cards__items">
          
                    <CardItem 
                    the_src={the_img}
                    text = "UT Automatic Course Scheduler"
                    label = "In Progress"
                    card_style = {{backgroundColor: 'black', opacity: '0.75'}}
                    clk = {() => {route_external("https://github.com/loganvaz/ChromeCoursePlanner/blob/main/README.md")}} 
                    />
                            

                    <CardItem 
                    the_src={logical_img}
                    text = "Logical Circuit Generator/Emulator"
                    label = "April 2022"
                    card_style = {{backgroundColor: 'darkgrey', opacity: '0.75'}}
                    clk = { () => {route_external("https://github.com/kotashashank/LL-LAB/blob/fifth/README.MD")}}
                    path = "/" />
                </ul>
                <ul className = "cards__items">
                    
                    <CardItem 
                    disable_click = {true}
                    the_src={SearchEngine}
                    text = "WebCrawler: Local Document Search Engine"
                    label = "December 2021"
                    card_style = {{backgroundColor: 'white', opacity: '0.75'}}
                    path = "/" />
              
                
                <CardItem 
                    the_src={FacialImg}
                    clk = { () => {route_external("https://github.com/loganvaz/emotionDetector/blob/main/README.md")}}
                    text = "Facial Emotion Detector: Machine Learning Algorithm"
                    label = "June 2021"
                    card_style = {{backgroundColor: 'darkgrey', opacity: '0.75'}}
                    path = "/" />
                    
        
                    <CardItem 
                    the_src={DoctorImg}
                    clk = { () => {route_external("https://docs.google.com/presentation/d/1iyVLvCfPwPzmyZiGY2iVacm_I-5KJd72/edit?usp=sharing&ouid=107472499432357053032&rtpof=true&sd=true")}}
                    text = "Healthcare at Home: Market Segment Analysis"
                    label = "March 2022"
                    card_style = {{backgroundColor: 'black', opacity: '0.725'}}

                    path = "/" />

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
