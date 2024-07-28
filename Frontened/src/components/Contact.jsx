import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocation, faMobilePhone } from '@fortawesome/free-solid-svg-icons'


function Contact() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-20' >
      <div className='container flex flex-col md:flex-row mt-20'>
      <div className='w-full md:w-1/2' style={{border:" 1px solid #e6e6e6"}}>
      <section className="contact flex" style={{justifyContent:"center",alignItems:"center"}}>
       <form className='' style={{maxWidth:"600px",width:"100%",padding:"25px",borderRadius:"8px",margin:"25px",boxShadow:"0 0 10px rgba(0,0,0,0.1),",color:"#333"}}>
          <h2 style={{fontSize:"30px",textAlign:"center"}}>Send us a message</h2>
         <div className="input-box mt-10">
           
           <input type="text" className=" " style={{width:"100%", border:"1px solid #ddd",borderRadius:"2px",padding:"5px",height:"45px",paddingLeft:"50px"}} placeholder='Enter your name' required />
        </div>
        <div className="input-box mt-6">
            
            <input type="email" className="" style={{width:"100%", border:"1px solid #ddd",borderRadius:"2px",padding:"5px",height:"45px",paddingLeft:"50px"}} placeholder='Enter your email' required />
        </div>
        <div className="input-box mt-6">
            
            <input type="number" className="" style={{width:"100%", border:"1px solid #ddd",borderRadius:"2px",padding:"5px",height:"45px",paddingLeft:"50px"}} placeholder='Mobile no.' required />
        </div>
        <div className="input-box mt-6">
            
            <textarea name="" id="" className="" style={{width:"100%", border:"1px solid #ddd",borderRadius:"2px",padding:"5px",height:"45px",minHeight:"180px",paddingLeft:"50px"}} placeholder='Enter your message' required></textarea>
       </div>
       <div className='mt-10' style={{textAlign:"center",borderRadius:"20px"}}>
        <button className="btn btn-sm bg-primary" style={{width:"100%",borderRadius:"20px"}} type="submit">Send Message</button>
        </div>
      </form>
  </section>
      </div>
      <div className='w-full md:w-1/2' style={{border:" 1px solid #e6e6e6"}}>
         <div style={{justifyContent:"center",alignItems:"center",margin:"25px",padding:"25px"}}>
          <div className='mt-20' style={{paddingLeft:"50px",paddingRight:"50px"}}>
         <div className=''>
         <FontAwesomeIcon style={{paddingRight:"10px"}} icon={faLocation}/>

                        <span >

                        Address
                        </span>
                        <p className='mt-6' style={{color:"#888"}}>
                            1039 A, Katehra Dariyabad, Prayagraj, Uttar Pradesh - 211003
                        </p>
                    </div>
         
         <div className='mt-10'>
         <FontAwesomeIcon style={{paddingRight:"10px"}} icon={faMobilePhone}/>

                        <span class="mtext-110 cl2">

                            Lets Talk
                        </span>
                        <p className="mt-3" style={{color:"cornflowerblue"}}>
                            +91 63868 21819 , +91 96483 77181
                        </p>
                    </div>
                    <div className='mt-10'>
                    <FontAwesomeIcon style={{paddingRight:"10px"}} icon={faEnvelope}/>

                        <span class="mtext-110 cl2">
                            Sale Support
                        </span>
                        <p className='mt-3' style={{color:"cornflowerblue"}}>
                            support@prayagrajxport.com
                        </p>
                    </div>
                    </div>
                    </div>
      </div>
      </div>
    </div>
    

    </>
  )
}

export default Contact

{/* <div class="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
                <div class="flex-w w-full p-b-42">
                    <span class="fs-18 cl5 txt-center size-211">
                        <span class="lnr lnr-map-marker"></span>
                    </span>
                    <div class="size-212 p-t-2">
                        <span class="mtext-110 cl2">
                            Address
                        </span>
                        <p class="stext-115 cl6 size-213 p-t-18">
                            1039 A, Katehra Dariyabad, Prayagraj, Uttar Pradesh - 211003
                        </p>
                    </div>
                </div>
                <div class="flex-w w-full p-b-42">
                    <span class="fs-18 cl5 txt-center size-211">
                        <span class="lnr lnr-phone-handset"></span>
                    </span>
                    <div class="size-212 p-t-2">
                        <span class="mtext-110 cl2">
                            Lets Talk
                        </span>
                        <p class="stext-115 cl1 size-213 p-t-18">
                            +91 63868 21819 , +91 96483 77181
                        </p>
                    </div>
                </div>
                <div class="flex-w w-full">
                    <span class="fs-18 cl5 txt-center size-211">
                        <span class="lnr lnr-envelope"></span>
                    </span>
                    <div class="size-212 p-t-2">
                        <span class="mtext-110 cl2">
                            Sale Support
                        </span>
                        <p class="stext-115 cl1 size-213 p-t-18">
                            support@prayagrajxport.com
                        </p>
                    </div>
                    </div>
                    </div>

      <FontAwesomeIcon icon={faEnvelope}/> */}
