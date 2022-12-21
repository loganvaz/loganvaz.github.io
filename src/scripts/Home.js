import React, {Component} from 'react';
import Header from './Header';



function Home() {
    return (
        <div className="App">
             <Header />
        <div className="HomePage" bgcolor="black">
        <div className="mainText" > 
            Logan Vaz
            <div className = "subText">
              Hello - I am a student at UT Austin, etc. etc.
            </div>
         </div>
        </div>
        
      </div>
    );
  }
  


export default Home;