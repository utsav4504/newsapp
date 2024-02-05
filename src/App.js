
import './App.css';
import React, { Component } from 'react'

import Nav from './components/Nav';
import News from './components/News';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation 
} from "react-router-dom";
function AppRoutes() {
  const location = useLocation();

  return (
    <Routes key={location.pathname}>
    
      <Route path="/" element={<News pagesize={5} country="in" category="general" />} />
      <Route path="/business" element={<News pagesize={5} country="in" category="business" />} />
      <Route path="/entertainment" element={<News pagesize={5} country="in" category="entertainment" />} />
      <Route path="/general" element={<News pagesize={5} country="in" category="general" />} />
      <Route path="/health" element={<News pagesize={5} country="in" category="health" />} />
      <Route path="/science" element={<News pagesize={5} country="in" category="science" />} />
      <Route path="/sports" element={<News pagesize={5} country="in" category="sports" />} />
      <Route path="/technology" element={<News pagesize={5} country="in" category="technology" />} />
    </Routes>
  );
}


export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
   
      
          <Nav />
          <AppRoutes />
        
   
      </div>
      </Router>
    )
  }
}



