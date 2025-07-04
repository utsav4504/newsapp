import React, { Component } from 'react'
import { useState } from 'react';
import {
Link,
    useNavigate,
} from "react-router-dom";
const Nav=()=>{
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

 
    return (
      <div>
         <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">

  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsNook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
       
       <li className="nav-item" >   
          <Link className="nav-link" to="/Business">Business</Link> </li>
       <li className="nav-item">
          <Link className="nav-link" to="/Entertainment">Entertainment</Link> </li>
       <li className="nav-item">
          <Link className="nav-link" to="/General">General</Link> </li>
       <li className="nav-item">
          <Link className="nav-link" to="/Health">Health</Link> </li>
       <li className="nav-item">
          <Link className="nav-link" to="/Science">Science</Link> </li>
       <li className="nav-item">
          <Link className="nav-link" to="/Sports">Sports</Link> </li>
       <li className="nav-item">
          <Link className="nav-link" to="/Technology">Technology</Link> </li>
       
      </ul>
      <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
   
    </div>

  </div>



</nav>
      </div>
    )
  }


export default Nav
