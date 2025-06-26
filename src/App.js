
import './App.css';
import React, { Component } from 'react'

import Nav from './components/Nav';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import SearchNews from './components/SearchNews';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
export default class App extends Component {
  apiKey=process.env.REACT_APP_NEW_API
  state={
    progress:0,
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <Router>
      <div>
          <Nav />
          

          <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
     
      />
        <Routes >
     
    <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general "pagesize={5} country="in" category="general" />} />
    <Route path="/search/:topic" element={<SearchNews apiKey={this.apiKey} pageSize={5} />} />



    <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="busniess " pagesize={5} country="in" category="business" />} />
    <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="entertainment"  pagesize={5} country="in" category="entertainment" />} />
    <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pagesize={5} country="in" category="general" />} />
    <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pagesize={5} country="in" category="health" />} />
    <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pagesize={5} country="in" category="science" />} />
    <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pagesize={5} country="in" category="sports" />} />
    <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pagesize={5} country="in" category="technology" />} />
  </Routes>
          
        
   
      </div>
      </Router>
    )
  }
}



