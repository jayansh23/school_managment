import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import ContactUs from './containers/ContactUs';
import Team from './containers/Team';
import History from './containers/History';

const AppRouter = () => {
  return (
    <div>
<Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/History" element={<History />} />


 </Routes>

    </div>
  )
}

export default AppRouter
