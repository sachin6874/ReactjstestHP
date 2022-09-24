import React from "react";
import Provider from "./Component/Provider";
import Home from "./Home";
import Project from "./Project";
import Skills from "./Skills";
import Testimonal from "./Testimonal";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const App=() =>{
  return (
    <div>
       <Navbar/> 
       <Routes>
       <Route path='/' element={<><Provider><Home/></Provider></>}></Route>
      <Route path="/project" element={<><Project/></>}></Route>
          <Route path='/skills' element={ <><Skills/></>}></Route>
          <Route path='/testimonal' element={<><Testimonal/></>}></Route>
        <Route path='/contact' element={<><Contact/></>}></Route>
          
      </Routes>
    </div>
  
    );
}

export default App;
