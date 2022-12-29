import Stories from './scripts/Stories'
import Header from './scripts/Header'
import Resume from'./scripts/Resume';
import Code from './scripts/Code';
import Pictures from './scripts/Pictures';
import Home from './scripts/Home';
import WorkApp from './prof_website/App';

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


const is_work = true;
function App() {

  let selected_page = "HomePage";

  return (

    
    <WorkApp />
  );
}

export default App;


