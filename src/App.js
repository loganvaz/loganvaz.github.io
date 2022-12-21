import './App.css';
import Stories from './scripts/Stories'
import Header from './scripts/Header'
import Resume from'./scripts/Resume';
import Code from './scripts/Code';
import Pictures from './scripts/Pictures';
import Home from './scripts/Home';

import {
  BrowserRouter,
  Routes,
  Router,
  Route
} from 'react-router-dom';

window.onload = () => {
  //document.getElementById("HomePage").classList.add("selected_menu");

}
document.onload = () => {
  document.getElementById("HomePage").classList.add("selected_menu");
}


function App() {

  let selected_page = "HomePage";

  return (

    <BrowserRouter>
     
        
      <Routes> 
        <Route path="/" element={<Home />} > </Route>
        <Route path="/home" element={<Home />} > </Route>
        <Route path="/stories" element={<Stories />} ></Route>
        <Route path="/code" element={<Code />} > </Route>
        <Route path="/resume" element={<Resume />} ></Route>
        <Route path="/pictures" element={<Pictures />} ></Route>
    
      </Routes>
  
    </BrowserRouter>
  );
}

export default App;


