import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'


function Signup() {
  return (
   <>
   <div className='flex h-screen items-center justify-center'>
   <div id="" className="w-[400px] ">
  <div className="modal-box">
    <form method="dialog">
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">SignUp</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input type="text" placeholder='Enter your name' className='w-80 px-3 border rounded-md outline-none'/>

    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="email" placeholder='Enter your email' className='w-80 px-3 border rounded-md outline-none'/>

    </div>
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="password" placeholder='Enter your Password' className='w-80 px-3 border rounded-md outline-none'/>

    </div>
    
    <div className='flex justify-around mt-4'>
        <button className='text-white rounded-md px-3 py-1 btn btn-sm bg-red-500 hover:bg-red-700 duration-200'>Login</button>
        <p>Have account?<button  className='underline text-blue-500 cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login
            </button>{" "}
            
            <Login/>
        </p>

    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default Signup
