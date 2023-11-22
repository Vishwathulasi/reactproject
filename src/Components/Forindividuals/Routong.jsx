import React from 'react'
import Medical from './Medical';
import Education from './Education ';
// import Browseafund from './Browseafund';
import Helpage from './Helpage';
import { Route,Routes } from 'react-router-dom';
import Browseafund from './Browseafund';
import Proffessionalneeds from './Proffessionalneeds';
import FinancialEmergency from './FinancialEmergency';
import Care from './Care';
import Smile from './Smile';
import Savelife from './Savelife';
import Homepage from './Homepage';
import Logo from './Logo';
import Fundraising from './Fundraising';
import SimplePaper from './SimplePaper';
import Signin from './Signin';
import Homepage1 from './Homepage1';
const Routong = () => {
  return (
     <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route path='/home' element={<Homepage1/>}/>
        <Route path='/medi' element={<Medical/>}/>
        <Route path='/Education' element={<Education/>}/>
        <Route path='/Proff' element={<Proffessionalneeds/>}/>
        <Route path='/fina' element={<FinancialEmergency/>}/>
        <Route path='/smile' element={<Smile/>}/>
        <Route path='/help' element={<Helpage/>}/>
        <Route path='/care' element={<Care/>}/>
        <Route path='/save' element={<Savelife/>}/>
        <Route path='/browser' element={<Browseafund/>}/>
        <Route path='/brow' element={<Logo/>}/>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/hello' element={<Fundraising/>}/>
        <Route path='/simple' element={<SimplePaper/>}/>
        <Route path='/Sign' element={<Signin/>}/>
     </Routes>
  )
}

export default Routong