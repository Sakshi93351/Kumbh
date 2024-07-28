import React from 'react'
import PropTypes from 'prop-types'
import {motion,useInView,useAnimation}  from 'framer-motion'
import Home from './pages/home/Home'
import Places from './pages/place/Places'
import News from './pages/new/News'

import { Route ,Routes} from "react-router-dom"
import Contacts from './pages/contacts/Contacts'
import "./app.scss"
import Signup from './components/Signup'
import Prayagraj from './components/Prayagraj'
import BadiKothi from './pages/place/BadiKothi'
import Events from './pages/events/Events'





function App(props) {
  return (
    <>
   
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contacts" element={<Contacts/>}/>
      <Route path="/News" element={<News/>}/>
      <Route path="/Places" element={<Places/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Prayagraj" element={<Prayagraj/>}/>
      <Route path="/BadiKothi" element={<BadiKothi/>}/>
      <Route path="/Events" element={<Events/>}/>


      
    </Routes>
    </>
  )
}

App.propTypes = {
 
}

export default App

