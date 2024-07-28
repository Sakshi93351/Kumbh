import React from 'react'
import kumbh1 from "../../public/kumbh 1.jpg"
import kumbh2 from "../../public/kumbh 2.jpg"
import kumbh3 from "../../public/kumbh 3.jpg"
import kumbh4 from "../../public/Kumbh4.jpg"
import kumbh5 from "../../public/kumbh5.webp"
import kumbh6 from "../../public/kumbh6.jpg"
import kumbh7 from "../../public/kumbh7.jpg"
import wave from "../../public/wave.jpg"
import { Link } from 'react-router-dom'
import attractionlist from "../../public/attractionlist.json"
import Card from './Card'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'
import newslists from "../../public/newslist.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';



function Banner() {
  const filterdata=attractionlist.filter((data)=>data.category==='show');
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};
  return (
    <>
    <div className=' flex flex-col md:flex-row md:mt-0 mt-20'>
        <div className='w-full'>
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={kumbh6}
      className="w-full" />
      
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      
      <a href="#slide2" className="btn btn-circle">❯</a>
      

    </div>
    <motion.div initial={{opacity:0,scale:0}} animate={{opacity:1,scale:1,x:-100}} transition={{duration:1}} className='absolute top-1/2  md:show
    ' style={{height:"50%",width:"17%",padding:"40px",right:"79px"}}>
    <h1  className='text-3xl text-l pb-2 text-center font-bold text-orange-300' style={{textAlign:"left"}}>KUMBH MELA</h1>
    <div className='absolute flex gap-4'>
      
      <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.95}} className="btn btn-outline  h-10 btn-sm" style={{borderColor:"#fdba74",color:"#fdba74"}}>Know more</motion.button>
      <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.95}} className="btn btn-outline  h-10 btn-sm" style={{borderColor:"#fdba74",color:"#fdba74"}}>Events</motion.button>

      </div>
      </motion.div>
    
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
      src={kumbh5}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={kumbh6}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
        
    </div>
    <div style={{backgroundImage:`url(${wave})`,backgroundRepeat:"no-repeat"} }>
    <motion.div 
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{amount:0.7}}
        
        
        
        className='w-full md:mt-10  mt-6 text-center' >
        <div className='space-y-5'>
        <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:1}} className='text-3xl font-bold text-orange-300' >Magha Mela in Prayagraj</motion.span> 
        <h1 className=''>,is a massive Hindu pilgrimage where devotees gather to bathe in the holy waters of the Ganges, seeking spiritual purification and blessings. Despite COVID-19 concerns, the event remains a testament to deep-rooted faith and tradition, attracting thousands of participants including sadhus and pilgrims from all corners of India. </h1>
        <p>Authorities face the challenge of ensuring safety amidst the large crowds, implementing health protocols while respecting the significance of the religious rituals central to this revered gathering.</p>
        <Link to="/Prayagraj">
        <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.95}} className="btn btn-outline btn-accent h-10 btn-sm" href="/Prayagraj">Know more</motion.button>
        </Link>
        </div>
        </motion.div>
        <div className='max-w-screen-xl container mx-auto md:px-10 px-3 mt-20' >
       <div className='mt-10'> <h1 className='text-3xl text-l pb-2 text-center font-bold text-orange-300'>NEWS</h1>
       </div>
    
    <div>
    <Slider {...settings}>
       {newslists.map((item)=>(
           <Cards item={item} key={item.id}/>
       ))}
      </Slider>
    </div>
    </div>
    </div>
        <div className='max-w-screen-xl container mx-auto md:px-10 px-3'>
       <div className='py-50 text-center mt-10 my-3 p-3'>  
        <h1 className='text-3xl text-l pb-2 text-center font-bold text-orange-300 pb-2 my-3'>PLACES to visit!!</h1>
       </div>
    <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
    
       {filterdata.map((item)=>(
           <Card item={item} key={item.id}/>
       ))}
     
    </div>

    <div style={{padding:"23px",textAlign:"center"}}>
      <Link to="/Places">
        <motion.button whileHover={{scale:1.2}} whileTap={{scale:0.95}} className="btn btn-outline btn-accent h-10 btn-sm" href="/Places">Know more</motion.button>
        </Link>
        </div>
        
    </div>
    <div className='mt-20 max-w-screen-xl container mx-auto md:px-10 px-3' style={{overflow:'hidden',paddingBottom:"20%",position:'relative'}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230660.45187606275!2d81.6367682882554!3d25.402482061334542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398534c9b20bd49f%3A0xa2237856ad4041a!2sPrayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1722175479948!5m2!1sen!2sin" width="600" height="250"  allowFullScreen Loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={{border:"0",width:"100%",position:"absolute"}}></iframe>
        </div>
    </>
  )
}

export default Banner
