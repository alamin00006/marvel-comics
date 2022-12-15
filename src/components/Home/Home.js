import React from 'react';
import Banner from './Banner/Banner';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

const Home = () => {
    const [user,loading] = useAuthState(auth);
    if(loading){
        <Loading></Loading>
    }
  
    return (
        <div>
          {
            user?<Banner></Banner>:<p className='text-center p-5 text-xl text-red-500'>Are You See Carousel? <Link to="/signIn">Please Login</Link></p>
          }
        
        </div>
    );
};

export default Home;