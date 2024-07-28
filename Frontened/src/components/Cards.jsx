import React from 'react'
import { motion } from 'framer-motion'


function Cards({item}) {
  return (
    <>
    <motion.div className='mt-4 my-3 p-3' whileHover={{scale:1.1}} whileTap={{scale:0.8}}>
    <div className="card bg-base-400 w-92 shadow-2xl">
  <figure className="px-10 pt-10">
    <img
      src={item.image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"></h2>
    <p>{item.content}</p>
    <div className="card-actions">
      <button className="btn btn-sm bg-primary">Know more</button>
    </div>
  </div>
</div>
    </motion.div>
    </>
  )
}

export default Cards
