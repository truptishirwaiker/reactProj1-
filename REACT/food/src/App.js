import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './component/Layout'
import Notfound from './component/Notfound'


import './App.css';
import Home from './component/Home';
import Fooddetail from './component/Fooddetail';

function App() {
return (
    <div className="App">
      <Routes>
      <Route path='/recipes' element={<Layout />}>
     <Route index element={<Home />} />
     <Route path='/recipes/:id' element={<Fooddetail />} />
      <Route path='*' element={<Notfound />} />
     </Route>
     </Routes>
    
      
    
  </div>
  )}
export default App;
