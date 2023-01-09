import React, {useState, useEffect, componentDidMount} from 'react';
import FlippingCard from './FlippingCard';
import Header from './Header'
import {CardMedia, Card, CardActionArea, CardContentArea,CardContent} from '@mui/material'


import single_candle from "../images/single_candle.jpg";
import garden from "../images/tree.jpg";
import carriage from "../images/carriage.jpg";

import alt1 from '../stories/files/withTheMusicOfTheNight.pdf'
import alt2 from "../stories/files/PoemTheGardenIOnceKnew.pdf"
import alt3 from "../stories/files/AGraveMistake.pdf"


import './Stories.css';


function Stories() {

  //set up stories so can open in new tab
  const story1_id = "16CHzAx6bd1jpqFDYftpUQysxixMxXVuf";
  const story2_id = "1oMTDZA1VWv-t4r6v_oEEIP1923e8R2t4";
  const story3_id = "1qU9rgA7tHG3OXRUtheEhgFpz_ShFL8lJ";

  const story1 = `https://docs.google.com/gview?url=https://drive.google.com/uc?id=${story1_id}&embedded=true`;
  const story2 = `https://docs.google.com/gview?url=https://drive.google.com/uc?id=${story2_id}&embedded=true`;
  const story3 = `https://docs.google.com/gview?url=https://drive.google.com/uc?id=${story3_id}&embedded=true`;

  const [height, change_height] = useState(window.innerHeight);
  const [width, change_width] = useState(window.innerWidth);


  useEffect(() => {

    window.addEventListener('resize', () => {
      change_height(height);
      change_width(width);
    });
  }, [height, width]);

    

    //list of all stories displaying
    const list_of_images = [single_candle, garden, carriage];
    
    const list_of_files = [story1, story2, story3];
    const list_of_alts = [alt1, alt2, alt3]
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


  const return_card_media = (component, image, alt, title, display_element, card_style, short_description,cn,idx ) => {


    let toRet = <div style={card_style} className = {"overall_card " + cn} id = {"front_card"+idx} >
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
          width={width*.4}
          image={image}
          className = {cn}
         
        />
        </div>
        
        
        
      </CardActionArea>
      
    </Card>
  </div>

    return toRet;
   

  }
   
  const get_back_card = (idx) => {
    let pdf_file = list_of_files[idx];
    let alt_file = list_of_alts[idx];

    console.log("wrote back of card\n");
    return <iframe src= {`${alt_file}`} id = {"back_card"+idx} frameborder="0" width = "100%" height =  {height*.8} alt = "Website not Loading Right Now" ></iframe>
   

    
  }



    return (
    
        <div className = "stories_background">
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
        </div>


    )
}

export default Stories;