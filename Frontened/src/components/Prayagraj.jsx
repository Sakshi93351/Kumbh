import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import kumbh1 from "../../public/kumbh 1.jpg"
import kumbh2 from "../../public/kumbh 2.jpg"
import kumbh3 from "../../public/kumbh 3.jpg"
import kumbh4 from "../../public/Kumbh4.jpg"
import kumbh5 from "../../public/kumbh5.webp"
import kumbh6 from "../../public/kumbh6.jpg"
import kumbh7 from "../../public/kumbh7.jpg"
import wave from "../../public/wave.jpg"
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Prayagraj() {
  return (
   <>
   <Navbar/>
   <div className=' mt-20'>
   <div className=' flex flex-col md:flex-row md:mt-0 mt-20'>
        <div className='w-full'>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={kumbh5}
      className="w-full" />
      
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      
      <a href="#slide2" className="btn btn-circle">❯</a>
      

    </div>
    
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={kumbh7}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={kumbh6}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
        </div>
        
    </div>
    <div style={{paddingBottom:"100px"}}>
    <div class="backk" >
    <motion.div 
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{amount:0.7}}
        
        
        
        className='w-full md:mt-10  mt-6 text-center' style={{isolation:"isolate"}} >
        <div className='space-y-5'>
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} className='text-3xl font-bold text-orange-300 underline' >Magha Mela in Prayagraj</motion.span> 
        <h1 className=''>Prayagraj, formerly known as Allahabad, is a significant city in Uttar Pradesh, India, known for its rich history, cultural heritage, and religious importance. The city's name was changed to Prayagraj in 2018 to reflect its ancient heritage.</h1>
        <p>The Kumbh Mela is celebrated in Prayagraj due to its religious and mythological significance, particularly the Triveni Sangam, which is the confluence of the Ganges, Yamuna, and the mythical Saraswati rivers. This confluence is considered one of the holiest places in Hinduism, believed to be a site where drops of the nectar of immortality (amrita) fell during a celestial battle between gods and demons.</p>
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} className='text-2xl font-bold text-orange-300' >Mythological Significance
        </motion.span> 
        <p>The origins of Kumbh Mela are rooted in Hindu mythology. According to the legend of the Samudra Manthan (churning of the ocean), gods and demons fought over a pot (kumbh) containing the nectar of immortality. During the battle, drops of this nectar fell at four places: Prayagraj, Haridwar, Ujjain, and Nashik. These locations became sacred sites where the Kumbh Mela is celebrated​ </p>
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

export default Prayagraj
