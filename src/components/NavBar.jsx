import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import {isMobile} from 'react-device-detect';

function NavBar() {
  if(isMobile){
    return(
      <div className='navbar w-full mb-10'>
        <div className="w-full">
            <Link to={'/'}>
               <img className='inline' src={logo} alt="Entreprenership Club" width={'40px'} />
               <span className='inline ml-4 text-xl text-primary'>Entrepreneurship Club</span>
            </Link>
        </div>
        {/* <details className="dropdown dropdown-end">
            <summary className="float-right m-1 btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </summary>
            <ul className="float-right shadow menu dropdown-content bg-base-100 rounded-box mt-10">
                <li> <Link className='text-right float-right' to={'/about'}>Events</Link> </li>
                <li> <Link className='text-right float-right' to={'/blog'}>Leadership</Link> </li>
                <li><Link className='text-xl ml-20' to='/contact'>Contact</Link></li>
            </ul>
        </details> */}
                
      </div>
    )
  } else {
  return (
    <div className='navbar mb-10 p-2 pb-6'>
        <Link to='/'>
            <img className='w-16' src={logo} alt="" />
            <span className="text-4xl ml-10 text-primary">Entrepreneurship Club</span>
        </Link>
{/*         
        <Link className='text-xl ml-20' to='/events'>Events</Link>
        <Link className='text-xl ml-20' to='/leadership'>Leadership</Link> */}
        {/* <Link className='text-xl ml-20' to='/contact'>Contact</Link> */}
    </div>
  ) 
  }
}

export default NavBar