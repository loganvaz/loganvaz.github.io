import React, {useState} from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from '@mui/material';



function FlippingCard({frontCard, backCard}) {


    const [isFlipped, changeFlipped] = useState(false);


    const stories_handleClick = (e) => {
        console.log("stories handle cli")
        e.preventDefault();
        changeFlipped(!isFlipped);
        //this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

    
    const cardStyle = {maxWidth: '40%',
    height: "20%",
    maxHeight: "60%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5%",
    marginBottom: "10%",
    width: "40%"
   }

   
    


    return (
        <span>


             <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" width = "60%">
                <Card variant = "outlined" style = {cardStyle} onClick= {(e) => {stories_handleClick(e);}}>
                    <div height = "100%">{frontCard}</div>
                </Card>

                <Card variant = "outlined" width = "60%" style = {cardStyle} onClick={(e) => {stories_handleClick(e);}}>
                    <div height = "100%">{backCard}</div>
                </Card>
            </ReactCardFlip>

        </span>
    )
}

export default FlippingCard;