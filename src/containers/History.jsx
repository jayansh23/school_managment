import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from "react";


const History = () => {

const artist = [
    {Id:1, Name:"Ram", Phone:9876543210},
    {Id:2,Name:"Sree", Phone:9876543210},
{Id:3, Name:"Rishabh", Phone:9818509250},
{Id:4, Name:"Dinesh", Phone:9818507878},
{Id:5, Name:"Pratik", Phone:9818509778},
{Id:6, Name:"Pratik", Phone:9818509778},
{Id:7, Name:"Pratik", Phone:9818509778},
{Id:8, Name:"Pratik", Phone:9818509778},
{Id:9, Name:"Pratik", Phone:9818509778},
];

const [value, setvalue] = useState(artist);

  return (
    <div>
        
        <h1>School History  </h1>
        
        <p>In addition to residential schools, the Canadian government and Christian
             churches enforced Indian day schools. The federal government used day 
             schools as tools of assimilation against Indigenous children until the 
    late 1870s, when residential schools were fully mobilized. Unlike residential schools,
              day school students remained in their communities and went home to their families in the evenings.
     </p>

     <NavLink to="/ContactUs">
<span className="btn-get-started scrollto">First Action</span> 
 </NavLink>

 <div className=""> 
     
     <table>
       <thead>
         <tr>
           <th>Team Id</th>
           <th>Team Member Name</th>
           <th>Team Member Phone No.</th> 
         </tr>
       </thead>
     <tbody>
 
 {value.map ( (item, index) =>( 
 
       <tr key={index}>
         <td>{item.Id}</td>
         <td>{item.Name}</td>
         <td>{item.Phone}</td>
       </tr>
       ))}
       
     </tbody>
     </table>
 
 

 

    </div>

    </div>

  )
}

export default History