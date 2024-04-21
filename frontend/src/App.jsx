import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './Pages/Home';
import NotFound from './Pages/Notfound';
import Success from './Pages/Success';
import './App.css'
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
       
      </Router>
    </>
  )
}

export default App