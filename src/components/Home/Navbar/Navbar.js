import React from 'react';
import logo from '../../../images/logo.PNG'
import marvel from '../../../images/marvel.PNG'
import rightLogo from '../../../images/leftlogo.PNG'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='bg-dark text-white nav-1'>
             <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 nav-left'>
                          <div className='d-flex align-items-center mt-3'>
                              <div>
                                 <img src={logo} alt=''/>
                              </div>
                              <div className='mt-2'>
                                 <h6>SIGN IN</h6>
                              </div>
                              <div class="vl ms-2"></div>
                              <div className='mt-2 ms-2'>
                                <h6>JOIN</h6>
                              </div>
                          </div>
                          
                    </div>
                    <div className='col-lg-4 col-md-4 justify-content-center'>
                            <div>
                                <img src={marvel} alt=""/>
                            </div>
                    </div>
                    <div className='col-lg-4 nav-right mt-3'>
                           <div className='d-flex justify-content-end '>
                               <div>
                                   <img src={rightLogo} alt=""/>
                               </div>
                               <div className='ps-2'>
                                   <h6>MARVEL UNLIMITED</h6>
                                    <p className='subscribe text-center'>SUBSCRIBE</p>
                               </div>
                               <div className='ms-3'>
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