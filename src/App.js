import React from 'react';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Single from './pages/single/single';
import List from './pages/list/List';
import Ness from './pages/ness/Ness';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className='Appglass'>
    
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
       <Route path="users">
        <Route index element={<List/>}/>
        <Route path=":userid" element={<Single />}/>
          <Route path="ness" element={<Ness />}/>
       

  </Route>

  <Route path="products">
        <Route index element={<List/>}/>
        <Route path=":productid" element={<Single />}/>
          <Route path="ness" element={<Ness />}/>
       

  </Route>
      </Route>
    </Routes>
  </BrowserRouter>
  </div>
  </div>
  );
}

export default App;
