import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import the_img from "../images/mountains.jpg";
import {Link}  from 'react-router-dom';

//import components from personal website
import FlippingCard from '../../scripts/FlippingCard';


function Cards() {
  


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
                    path = "/services" />

                    <CardItem 
                    the_src="/prof_images/cave_opening.JPG"
                    text = "Logical Circuit Generator/Emulator"
                    label = "April 2022"
                    path = "/services" />
                </ul>
                <ul className = "cards__items">
        
                    <CardItem 
                    the_src="prof_images/cave_opening.JPG"
                    text = "WebCrawler: Local Document Search Engine"
                    label = "December 2021"
                    path = "/services" />
              
                
                <CardItem 
                    the_src="prof_images/cave_opening.JPG"
                    text = "Facial Emotion Detector: Machine Learning Algorithm"
                    label = "June 2021"
                    path = "/services" />
                    
        
                    <CardItem 
                    the_src="prof_images/cave_opening.JPG"
                    text = "explore waterfall in AMZN"
                    label = "Ad5"
                    path = "/services" />

                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards
