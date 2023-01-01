import React,  {useState} from 'react';
import './Resume.css';
import file_path from '../files/resume.pdf';


//pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
  };

function Resume() {

    //const fileId = "1yU0ex5ThGkT8NlmHo7LPqw0aiMntp_FD";
    //const file_path = `https://docs.google.com/gview?url=https://drive.google.com/uc?id=${fileId}&embedded=true`;
    //const file_path = "../files/resume.pdf"



    window.onload = () => {
        console.log("window loaded\n");
        console.log(window.location.pathname);
    }


    return (
        <div className ="resume">
            <div className = "resume_title">Resume</div>
          
             <iframe src= {`${file_path}#view=fitH`} height="80%%" width="45%%" alt = "Apologies - resume not loading right now" style = {{minHeight: '60vh'}}></iframe>
        </div>
    )
}

export default Resume;