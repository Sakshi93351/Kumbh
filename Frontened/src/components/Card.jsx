import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'




function Card({item}) {
  return (
    <>
     <motion.div  className="card bg-base-100 image-full w-86 h100 shadow-xl" whileHover={{scale:1.1}} whileTap={{scale:0.8}}>
  <figure style={{filter:"brightness(0.5)"}}>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body items-center text-center" style={{gap:"3.5rem"}}>
    <h2 className="card-title" style={{ textTransform:"uppercase",color:"white",padding:"5px"}}>{item.title}</h2>
    
    <div className="card-actions items-center text-center">
      <Link to={item.url}>
      <button href={item.url} className="btn btn-sm bg-primary">Read More</button>
      </Link>
    </div>
  </div>
</motion.div>
    </>
  )
}

export default Card
