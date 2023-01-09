import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route, HashRouter} from 'react-router-dom';
import Home from './components/pages/Home';

import Services from './components/pages/Services';
import Products from './components/pages/Products';

import Footer from './components/Footer';
import Sources from './components/Sources';

import Resume from './components/Resume';
import Stories from '../scripts/Stories.js'

const WorkApp = () => {


    useEffect( () => {
        let userAgentString = 
                navigator.userAgent;
        let safariAgent = 
        userAgentString.indexOf("Safari") > -1;

        let chromeAgent = 
        userAgentString.indexOf("Chrome") > -1;

        if (safariAgent && !chromeAgent) 
        {
            alert("Please don't use safari to view this application");
        }
        
    })

    return (
        <span>
            <HashRouter basename = {`/${process.env.PUBLIC_URL}`} >
                <Navbar />
                
                <Routes>
                    <Route path = "" exact element = {<Home />} />
                    <Route path ='/resume' element = {<Resume />  } />
                    <Route path ='/stories' element = {<Stories />  } />
                    <Route path = '/sources' element = {<Sources />} />
                </Routes>
                <Footer />
            </HashRouter>
        
        
        </span>

    )
}

export default WorkApp;