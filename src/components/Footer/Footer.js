import React from 'react';
import footerLogo from '../../images/footerLogo.PNG'

const Footer = () => {
    return (
        <div className='bg-black  text-base-100'>
            <div className='grid grid-cols-3 lg:grid-cols-6 md:grid-cols-2 footer p-20 ml-16'>
                  <div>
                      <img src={footerLogo} alt=''/>
                  </div>
                  <div>
                      <ul className=' list-style-none '>
                         <li>ABOUT MARVEL</li>
                         <li>HELP/FAQS</li>
                         <li>CAREERS</li>
                         <li>INTERNSHIPS</li>
                      </ul>
                  </div>
                  <div>
                  <ul className=' list-style-none'>
                         <li>ABOUT MARVEL</li>
                         <li>HELP/FAQS</li>
                         <li>CAREERS</li>
                         <li>INTERNSHIPS</li>
                      </ul>
                  </div>
                  <div>
                  <ul className=' list-style-none'>
                         <li>ABOUT MARVEL</li>
                         <li>HELP/FAQS</li>
                         <li>CAREERS</li>
                         <li>INTERNSHIPS</li>
                      </ul>
                  </div>
                  <div>
                  <ul className=' list-style-none'>
                         <li>ABOUT MARVEL</li>
                         <li>HELP/FAQS</li>
                         <li>CAREERS</li>
                         <li>INTERNSHIPS</li>
                      </ul>
                  </div>
                  <div>
                  <ul className=' list-style-none'>
                         <li>ABOUT MARVEL</li>
                         <li>HELP/FAQS</li>
                         <li>CAREERS</li>
                         <li>INTERNSHIPS</li>
                      </ul>
                  </div>
            </div>
        </div>
    );
};

export default Footer;