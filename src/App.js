import React from 'react';
import NavbarComponents from './components/NavbarComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Cloud from './pages/Cloud';
import Aws from './pages/Aws';
import {  Routes, Route } from "react-router-dom";
import './App.css';
import Particles from './components/Particles';
import ScrollButton from './components/ScrollButton';
import { Content } from './components/Styles';
  const App = () =>  {

    return (
      <div className="App">
         <div>
            <Routes>
              <Route path="/" element={<NavbarComponents />}>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cloud" element={<Cloud />} />
                <Route path="/aws" element={<Aws />} />
              </Route>
            </Routes>
          </div>
          <Particles id="tsparticles" />
          <Content />
          <ScrollButton />
      </div>
      
    );
  }

export default App;
