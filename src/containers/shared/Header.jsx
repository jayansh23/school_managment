import React from 'react'
import { NavLink } from 'react-router-dom';
import mainlogo from "../../images/schoolLogo2.jpg"

const Header = () => {
  return (
    <div className='header '> 
    <div className='headerDivLogo'>
    {/* <img src='./schoolLogo2.jpg' className='logoSize' /> */}
 <img src={mainlogo} className='logoSize' />

    </div>
     
     <div className='headerDivNav'>
        <NavLink to={"/Home"}>
    <span className='headerLink'><i class="fa fa-solid fa-home"></i> Home </span>
        </NavLink>
        <NavLink to={"About"}>
            <span className='headerLink'><i class="fa fa-sharp fa-solid fa-info"></i> About </span>
        </NavLink>
        <NavLink to={"ContactUs"}>
            <span className='headerLink'><i class="fa fa-regular fa-address-book"></i>Contact Us </span>
         </NavLink>
   Q
        <NavLink to={"Team"}>
            <span className='headerLink'><i class="fa fa-regular fa-building"></i>Team </span>
         </NavLink>

         <NavLink to={"History"}>
            <span className='headerLink'><i class="fa fa-regular fa-building"></i>History</span>
         </NavLink>

         </div>

    </div>
  )
}

export default Header