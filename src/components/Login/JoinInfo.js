import marvel from '../../images/marvel.PNG'
import logo from '../../images/logo.PNG'
import './JoinInfo.css'
import { Link } from 'react-router-dom';


const JoinInfo=()=>{
  
  return (
   
    <div className="w-96 px-10 text-base-100 mt-5">
          
        <h1 className='text-3xl'>Enhance Your Marvel Experience</h1>
                  
         <div className='flex mt-5 items-center'>
             <div>
                <img src={marvel} alt=""/>
             </div>
             <div className='ml-5'>
                <img src={logo} alt=""/>
             </div>
        </div>
           <div className='mt-2 join-info flex'>
            <div className='mr-2 mt-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" class="bi bi-circle-fill " viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8"/>
            </svg>
            </div>
           <p>placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>  
          </div>                     
           <div className='mt-2 join-info flex'>
            <div className='mr-2 mt-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" class="bi bi-circle-fill " viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8"/>
            </svg>
            </div>
           <p>placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>  
          </div>                     
           <div className='mt-2 join-info flex'>
            <div className='mr-2 mt-3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="currentColor" class="bi bi-circle-fill " viewBox="0 0 16 16">
            <circle cx="8" cy="8" r="8"/>
            </svg>
            </div>
           <p>placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>  
          </div>                     
            <div className='mt-16 text-center'>
                <button className='join-button'>
                  <Link to="signUp">Join Now</Link>
                  </button>     
            </div>
            <div className='text-center mt-5 mb-5 already-account'>
              <h6 className=''>
                 Already have an account? <Link to="signIn">Sign in</Link>
                </h6> 
              
            
            </div>
                             
    </div>
  );
}

export default JoinInfo;