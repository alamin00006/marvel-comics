import React, { useState, useEffect, useRef } from 'react';
import logo from '../../../images/logo.PNG'
import marvel from '../../../images/marvel.PNG'
import rightLogo from '../../../images/leftlogo.PNG'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import './Navbar.css'
import JoinInfo from '../../Login/JoinInfo';
import Login from '../../Login/Login';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
const Navbar = () => {
    const [user] = useAuthState(auth);
    const [open, setOpen] = useState(false);
    let menuRef = useRef();
  
    useEffect(() => {
      let handler = (e)=>{
        if(!menuRef.current?.contains(e.target)){
          setOpen(false);
         
        }      
      }
  
      document.addEventListener("click", handler);
      
  
      return() =>{
        document.removeEventListener("click", handler);
      }
  
    },[]);
    return (
        <div  className='bg-black text-base-100 nav-1'>
                        
             <div className='ml-16'>
           
                <div  className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2'>
                    <div className=' nav-left'>
                          <div className='flex items-center mt-3 text-base-100'>
                              <div className='mt-1'>
                                 <Link to="/">
                                 <img src={logo} alt=''/>
                                 </Link>
                              </div>
                              <div className='mt-1'>
                                 <h6  className='cursor-pointer'>
                                  {
                                    user?<span onClick={() =>signOut(auth)} className="cursor-pointer">SignOut
                                    </span>:<Link to='/signIn' className="cursor-pointer">Sign in
                                  </Link>
                                  }
                                 </h6>
                                 
                              </div>
                              <div class="vl ml-2 mt-1"></div>
                              <div className='mt-1 ml-2 flex flex-col relative'>
                                  <div ref={menuRef} onClick={()=>{setOpen(!open)}}>
                                    <h6 className='cursor-pointer'>
                                        JOIN
                                    </h6>
                                 
                                  </div>
                                     {
                                        open? <div>
                                        <div className=' ml-0 absolute bg-black text-black join-part border-t'>
                                       
                                            <JoinInfo></JoinInfo>
                                            
                                        </div>
                                   </div>:''
                                     }
                              </div>
                          </div>
                          
                    </div>
                    <div className='justify-center ml-20'>
                            <div>
                                <img src={marvel} alt=""/>
                            </div>
                    </div>
                    <div className='nav-right mt-3'>
                           <div className='flex justify-end text-base-100 mr-16'>
                               <div>
                                   <img src={rightLogo} alt=""/>
                               </div>
                               <div className='ps-2'>
                                   <h6>MARVEL UNLIMITED</h6>
                                    <p className='subscribe text-center mt-2'>SUBSCRIBE</p>
                               </div>
                               <div className='ml-3'>
                                   <MagnifyingGlassIcon className="search-icon"/>
                               </div>
                           </div>
                    </div>
                </div>
             </div>
             
        </div>
    );
};

export default Navbar;