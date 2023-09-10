import React from 'react';
import { NavLink } from 'react-router-dom';

const Team = () => {
  return (
    <div >

  <section className="d-flex align-items-center">
    <div className="container">
      <h1>Welcome to shool Group</h1>
      <h4>We are Group of talented Faculties around the world,Dream for New generation.</h4>
      {/* <a href="#about" className="btn-get-started scrollto">Get Started</a> */}
      <NavLink to="/History">
            <span className="btn-get-started scrollto"> let see more</span>
        </NavLink>
      </div>
      </section>
      
      <div className='row'>
         <div className='col-md-3'>
      <div class="card" >
  <img src="./profile-1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Ram</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
     </div>
  </div>

<div className='col-md-3'>
  <div className='card'>
    <img src='profile-2.jpg' className='card-img-top' alt=''/>
      <div>
        <h5 className='card-title'>Sita</h5>
        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content. </p>
      <a href='#' className='btn btn-primary'>More Details</a>
      </div>
 </div>
 </div>

 <div className='col-md-3'>
  <div className='card'>
    <img src='./profile-3.webp' className='card-img-top' alt=''/>
      <div>
        <h5 className='card-title'>Srita</h5>
        <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content. </p>
      <a href='#' className='btn btn-primary'>More Details</a>
      </div>
 </div>
 </div>

 <div className='col-md-3'>
      <div class="card" >
  <img src="./profile-4.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Ramesh</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
     </div>
  </div>


 </div>


    </div>
  )
}

export default Team