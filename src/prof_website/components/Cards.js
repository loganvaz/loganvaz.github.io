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

        <h1>Look @ these epic destingations</h1>
        <div className = "cards__container">
            <div className = "cards__wrapper">
                <ul className = "cards__items">

                    <CardItem 
                    the_src={the_img}
                    text = "explore mountains in AMZN"
                    label = "Adventure"
                    path = "/services" />

                    <CardItem 
                    the_src="/prof_images/cave_opening.JPG"
                    text = "explore waterfall in AMZN"
                    label = "Ad2"
                    path = "/services" />
        
                    <CardItem 
                    the_src="prof_images/cave_opening.JPG"
                    text = "explore waterfall in AMZN"
                    label = "Ad3"
                    path = "/services" />
              
                </ul>
                <ul className = "cards__items">
                <CardItem 
                    the_src="prof_images/cave_opening.JPG"
                    text = "explore waterfall in AMZN"
                    label = "Ad4"
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
