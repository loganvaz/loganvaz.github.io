import React, {Component} from 'react';
import FlippingCard from '../FlippingCard';
import { CardActionArea , Card, CardMedia} from '@mui/material';
import ImageGallery from 'react-image-gallery';

const import_all = (r) => {
    return r.keys().map(r);
};


function CollegeAlbum() {

    //const title_pic = require.context("../../album_title_pics/college", false, /\.(png|jpe?g|svg)$/);
    const title_pic = import_all(require.context("../../album_title_pics/college"), false);
    const album_pics = import_all(require.context("../../photo_album/college"), false);

    const pclass = "college_album"

    const ptitle = "College";
    const get_front_card = () => {
    return <Card> 
        <div className ={ "picture_front " + pclass}>
            {ptitle}
        </div>

        <div id = {"picture_front_img_college"}>
            <CardActionArea>
                <CardMedia component = "img" image = {title_pic} title = {ptitle} classes = {"picture_front image " + pclass} />
             </CardActionArea>
        </div>

      </Card>
    }

    const preventflip =(e) => {
        console.log("preventing flip\n");
        e.stopPropagation();

    }
    const get_back_card = () => {
        const photo_album_dict = album_pics.map((img, idx) => {return {original: img}});
        console.log("photo_alubum dict is " + photo_album_dict);
        return <Card>  
                <CardActionArea>
                    <div style = {{zIndex: 100, position: 'absolute', top: '.5vh', right: '.5vh', color: "black"}}></div>
                </CardActionArea>
                <ImageGallery items ={photo_album_dict} className = "pictureAlbum" onClick={(e) =>preventflip(e)}/> 
                    
               </Card>
    }

    return (

        <div className = "pictureAlbumParent">  <FlippingCard frontCard={get_front_card()} backCard = {get_back_card()}/></div> 
    )

}

export default CollegeAlbum;