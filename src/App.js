import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Component/Navbar';

import Cplusplus from './Component/C++';
import Java from './Component/Java';
import Python from './Component/Python';



import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'


function App() {
  return (
    <Router>
      <>

        <Navbar />
        
        
        <Routes>
        <Route exact path='/' element={<Python />} />
          <Route exact path='/cplus' element={<Cplusplus />} />
          <Route exact path="/java" element={<Java />} />
          <Route exact path="/python" element={<Python />} />
        </Routes>
        </>
    </Router>
  );
}

export default App;
