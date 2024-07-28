import React from 'react'
import attractionlist from "../../public/attractionlist.json"
import Card from './Card'
import { motion } from 'framer-motion'
import wave from "../../public/wave.jpg"


function Place() {
  return (
    <>
    <div className='max-w-screen-xl container mx-auto md:px-10 px-3 mt-20' style={{marginBottom:"45px"}} >
       <div className='py-50 text-center mt-10 my-3 p-3' >  
        <h1 className='text-3xl text-l pb-2 text-center font-bold text-orange-300 pb-2 my-3' >PLACES to visit!!</h1>
        <p className='text-center'>Prayagraj, formerly known as Allahabad, is a historic city in Uttar Pradesh, India, known for its rich cultural heritage and religious significance. Here are some must-visit places in Prayagraj:</p>
       </div>
    <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
    
       {attractionlist.map((item)=>(
           <Card item={item} key={item.id} />

       ))}
     
    </div>

   
    </div>
    </>
  )
}

export default Place
