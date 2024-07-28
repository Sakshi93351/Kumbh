export const fadeIn=(direction,delay)=>{
    return{
        hidden:{
            y: direction==='up'?40 :direction==='down'?-40:0,
            x: direction==='left'?40 :direction==='right'?-40:0,
        },
        show:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type:'tween',
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75],
            }
        }
    }

}
// const container = {
//     hidden: { opacity: 1, scale: 0 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2
//       }
//     }
//   };
  
//   const item = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1
//     }
//   };
//   export const Example = () => (
//     <motion.ul
//       className="container"
//       variants={container}
//       initial="hidden"
//       animate="visible"
//     >
//       {[0, 1, 2, 3].map((index) => (
//         <motion.li key={index} className="item" variants={item} />
//       ))}
//     </motion.ul>
//   );
  