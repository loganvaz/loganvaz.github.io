import React, {Component, useState} from 'react';
import Header from './Header'

import PDFViewer from './PDFViewer.js'

import resume from '../pdfs/resume.pdf'
import mountain from '../images/mountains.jpg'
//pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'standard_fonts/',
  };

function Resume() {

    const fileId = "1yU0ex5ThGkT8NlmHo7LPqw0aiMntp_FD";

    const file_path = `https://docs.google.com/gview?url=https://drive.google.com/uc?id=${fileId}&embedded=true`;



    window.onload = () => {
        console.log("window loaded\n");
        console.log(window.location.pathname);
    }

    //add in case have multiplle pages
    const [numPages, setNumPages] = useState(null);
    //const [resume, setResume] = useState("./images/mountains.jpg");
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <div className ="App resume" id = "resume">
            
             <Header />

             <iframe src= {file_path} height="80%%" width="45%%" alt = "Website not Loading Right Now"></iframe>

           
        </div>
    )
}

export default Resume;