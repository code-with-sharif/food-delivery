import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Componant/Home';
import About from './Componant/About';
import Menue from './Componant/Menue';
import Booktable from './Componant/Booktable';
import MyNavbar from './Componant/Navbar';
import  Carousels22  from './Componant/Carousels22';

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          {/* <Route exact path="/carousels22" element={<Carousels22 />} /> */}
          <Route exact path="/about" element={<About />} />
          <Route  path="/menue" element={<Menue />} />
          <Route exact path="/booktable" element={<Booktable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
