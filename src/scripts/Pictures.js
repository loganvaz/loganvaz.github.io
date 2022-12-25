import React, {Component} from 'react';
import Header from './Header'
import FlippingCard from './FlippingCard';
import { CardActionArea , Card, CardMedia} from '@mui/material';
import CollegeAlbum from './album_scripts/CollegeAlbum';



function Pictures() {

    //import all from a directory
    const title_pics = ["../album_title_pics/college", "../album_title_pics/family", "../album_title_pics/other_schools"]
    


    
    //creating w/ a javascript approach to mix things up
    const make_front_image = (idx) => {

        return <Card> 
                <div className ={ "picture_front " + pclasses[idx]}>
                    {ptitles[idx]}
                </div>
        
                <div id = {"picture_front_img"+idx}>
                    <CardActionArea>
                        <CardMedia component = {title_pics[idx][0]} title = {ptitles[idx]} classes = {"picture_front image " + pclasses[idx]} />
                     </CardActionArea>
                </div>

              </Card>

    }

    const make_back_image = (idx) => {
        return <div>back image</div>
    }

    

    const photo_dirs = ["../photo_album/college", "../photo_album/family", "../photo_album/other_schools"];
    const ptitles = ["Title 1", "Title 2", "Title 3"];
    
    const pclasses = ["college", "family", "other_schools"]

    const video_dirs = ["../photo_album/dance"];
    const vtitles = ["Title 0"];
    const title_vids = ["../video_title"]

    return (
        <div className ="App pictures">
             <Header />
           <div className = "picture album">
            
                <CollegeAlbum />

            
            </div>


            <div className = "video album" >


            </div>
        </div>
    )
}

export default Pictures;


    /*

    ptitles.map((title, index) =>  
        <FlippingCard frontCard = {make_front_image(index)} backCard = {make_back_image(index)}> 

        </FlippingCard>
        

)*/



//    vtitles.map((title, index) => <div>{title}</div>)

    /*
        
        */
        //const list_of_images = import_all(require.context('../stories/images/', false));
        //const files = import_all(require.context("../stories/files", false));
