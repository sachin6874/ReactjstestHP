import React from "react";
import "./Navbar.css"
import { NavLink } from "react-router-dom";
const Navbar =()=>{
    return(
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Sachin Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><NavLink to = "/" style={{textDecoration: "none"}}>HOME</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><NavLink to = "/project" style={{textDecoration: "none"}}>PROJECT</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><NavLink to = "/skills" style={{textDecoration: "none"}}>SKILLS</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><NavLink to = "/testimonal" style={{textDecoration: "none"}}>TESTIMONAL</NavLink></a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><NavLink to = "/contact" style={{textDecoration: "none"}}>CONTACT</NavLink></a>
        </li>
        </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>




        
    )
}
export default Navbar;