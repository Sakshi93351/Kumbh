import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


import kothi from "../../../public/badikothi.jpg"


function BadiKothi() {
  return (
    <>
    <Navbar/>
    <div className=''>
    <div className=' flex flex-col md:flex-row md:mt-0 mt-20'>
         <div className='w-full'>
         <div className="carousel w-full">
   <div id="slide1" className="carousel-item relative w-full">
     <img
       src={kothi}
       className="w-full" style={{height:"400px"}} />
       
    
     
   </div>
  
   
 </div>
         </div>
         
     </div>
     <div style={{paddingBottom:"100px"}}>
     <div className="backk" >
     <motion.div 
         variants={fadeIn("up",0.2)}
         initial="hidden"
         whileInView={"show"}
         viewport={{amount:0.7}}
         
         
         
         className='w-full md:mt-10  mt-6 text-center' style={{isolation:"isolate"}} >
         <div className='space-y-5'>
         <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} className='text-3xl font-bold text-orange-300 underline' >Badi Kothi</motion.span> 
         <h1 className=''>Badi Kothi in Prayagraj, is a significant historical mansion reflecting a blend of traditional Indian and colonial architectural styles. Located in the heart of the city, it is known for its intricate carvings, spacious courtyards, and ornamental details. Badi Kothi holds cultural and historical importance, often associated with the region's heritage. The mansion might serve various purposes, including being a private residence, a venue for cultural events, or a tourist attraction. For current information and visiting details, checking with local tourism offices is recommended.</h1>
         <p>Badi Kothi is a historic mansion that reflects the architectural style and grandeur of the era in which it was built. It is associated with the cultural and social history of Prayagraj.</p>
         <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} className='text-2xl font-bold text-orange-300' >Architecture
         </motion.span> 
        <p>The mansion showcases a blend of traditional Indian and colonial architectural styles. It often features intricate carvings, spacious courtyards, and ornamental details.</p>
         <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} className='text-2xl font-bold text-orange-300' >Ritual Importance
         </motion.span> 
         <p>Taking a dip at the Triveni Sangam during the Kumbh Mela is believed to cleanse one's sins and lead to Moksha (liberation from the cycle of life and death). The timing of the Kumbh Mela is determined by the alignment of the stars and planets, particularly the position of Jupiter and the Sun in the zodiac signs of Aquarius and Aries respectively​ </p>
         <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} className='text-2xl font-bold text-orange-300 ' >Historical Context
         </motion.span> 
         <p>The Kumbh Mela has been celebrated for centuries and has grown in scale and significance over time. Historical records and religious texts reference the Kumbh Mela as a grand congregation where spiritual leaders, saints, and devotees gather to participate in rituals, discussions, and cultural events.</p>
         <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} className='text-2xl font-bold text-orange-300 ' >Modern Significance
         </motion.span>
         <p>Today, the Kumbh Mela is one of the largest religious gatherings in the world, attracting millions of pilgrims from around the globe. It serves as a major event for social, cultural, and spiritual exchange, reinforcing its importance in Hindu tradition and its global recognition​ </p> 
         <p>The combination of mythological tales, religious beliefs, and historical practices make Prayagraj a central and enduring site for the celebration of the Kumbh Mela.</p>
         </div>
         </motion.div>
    
     </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default BadiKothi
