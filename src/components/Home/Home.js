import React from 'react';
import Banner from './Banner/Banner';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Home = () => {
    const [user,loading] = useAuthState(auth);
    if(loading){
        <Loading></Loading>
    }
  
    return (
        <div>
          {
            user?<Banner></Banner>:'Are You Carousel? Please Login'
          }
        
        </div>
    );
};

export default Home;