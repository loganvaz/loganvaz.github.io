import React, {useState, useEffect, componentDidMount} from 'react';
import FlippingCard from './FlippingCard';
import Header from './Header'
import {CardMedia, Card, CardActionArea, CardContentArea,CardContent} from '@mui/material'


import single_candle from "../images/single_candle.jpg";
import garden from "../images/tree.jpg";
import carriage from "../images/carriage.jpg";

import story1 from '../stories/files/withTheMusicOfTheNight.pdf'
import story2 from "../stories/files/PoemTheGardenIOnceKnew.pdf"
import story3 from "../stories/files/AGraveMistake.pdf"

import './Stories.css';

//functions to get window dimensions
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function Stories() {

    

    //list of all stories displaying
    const list_of_images = [single_candle, garden, carriage];
    const list_of_files = [story1, story2, story3];
    const titles = ["With the Music of the Night \nNo More", "The Garden - Forever in My Mind", "A Grave Mistake"];
    const class_names = ["Phantom", "Garden", "Carriage"]
    const descriptions = ["Poem", "Poem", "Short Story"];

    //styling for our media
    const card_media_style = {
        maxHeight: '2%',
        minHeight:'2%',
        height: "2%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "0%",
    
    }
    //make title
    const make_title = (text, cn) => {
        var toRet = <div className ={"card_title_area " +cn}> <div className = {"card_title story "+cn}>{text}</div> </div>
        return toRet;
    }


    //resizing
    const { height, width } = useWindowDimensions();


  const return_card_media = (component, image, alt, title, display_element, card_style, short_description,cn,idx ) => {


    let toRet = <div stlye={card_style} className = {"overall_card " + cn} id = {"front_card"+idx} >
    <Card style={card_style}>
      <CardActionArea>
      {display_element}
        <div className = {"between card_media " + cn}>{cn == "Phantom" ? "With the Music of the Night No More" : ""}</div>
        <div className = {"card_media " + cn}>
        <CardMedia
          alt={alt}
          component={component}
          title={title}
          height={height*.6}
          width={width*.2}
          image={image}
          classes = {cn}
         
        />
        </div>
        
        
        
      </CardActionArea>
      
    </Card>
  </div>

    return toRet;
   

  }
   
  const get_back_card = (idx) => {
    let pdf_file = list_of_files[idx];

    console.log("wrote back of card\n");
    return <iframe src= {`${pdf_file}`} id = {"back_card"+idx} frameborder="0" width = "100%" height =  {height*.8} alt = "Website not Loading Right Now"></iframe>

    
  }



    return (
    
        
        <div className ="stories">
        
                {
                    
                    list_of_images.map(
                        (image, index) => 
                            <FlippingCard frontCard = { return_card_media("img", image, "could not display this image", descriptions[index], make_title(titles[index],class_names[index]), card_media_style, "",class_names[index],index)}
                             backCard = {get_back_card(index)}>

                            </FlippingCard>
                    )
                }
        </div>


    )
}

export default Stories;