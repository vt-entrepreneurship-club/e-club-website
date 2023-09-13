import React from 'react'
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'
import hero_image from '../assets/hero_image.jpg'
import hero_image_mobile from '../assets/hero_image_mobile.jpg'
import {isMobile} from 'react-device-detect';

function HomePage() {
    let heroImageElement = ""
    if(!isMobile){
        heroImageElement = hero_image
    } else {
        heroImageElement = hero_image_mobile
    }

  return (
    <div className='container w-11/12 mx-auto'>
        <img className='w-full mx-auto mb-10' src={heroImageElement} alt="" />
        <h1 className='text-3xl lg:text-4xl'>Where Entrepreneurship Becomes Community</h1> 
        <p className='mt-4 mb-8 text-xl lg:text-2xl'>
            Right at the center of Virginia Tech's startup ecosystem, we bridge gaps between students, industry leaders, and 
            startups that are building spectacular products.
        </p>
        <p className='text-xl mb-8 lg:text-2xl lg:text-2xl'>
            In collaboration with the <a className='text-accent' target="_blank" href="https://www.apex.vt.edu/">Apex Center</a>, the Entrepreneurship Club helps students get integrated into
            the startup ecosystem.
        </p>

        <div className="lg:mb-20"></div>

        <div className='lg:w-1/2 lg:float-left'>
            <h2 className='text-3xl text-primary mx-auto mb-4 lg:text-4xl'>What We Do</h2>
            <img className='border lg:w-11/12' src={image2} alt="" />
            <p className='text-xl mt-4 mb-6 lg:w-11/12 lg:text-2xl'>We provide connections, knowledge, and inspiration for members 
                to get started and continue down their entrepreneurial journey.
            </p>
        </div>
        <div className="lg:w-1/2 lg:float-left">
            <h2 className='text-3xl text-primary mx-auto mb-4 lg:text-4xl'>Our Mission</h2>
            <img className='border lg:w-11/12' src={image3} alt="" />
            <p className='text-xl mt-4 lg:text-2xl'>
            Our mission is to create a community of individuals who are 
            comfortable and confident in starting projects and building ideas.
            </p>
        </div>

        <div className='lg:clear-left'></div>
        <div className="lg:mb-8"></div>

        <h2 className='text-3xl mt-8 text-primary mx-auto lg:text-4xl'>Sign up for our Newsletter</h2>
        <p className='mt-4 text-xl'>
        Join 2,000 others in finding out what's new in the entrepreneurial community around Blacksburg. Delivered weekly to your inbox during the semester.
        </p>
        <div className="form-control mt-10">
            <input type="text" placeholder="Name" className="input input-bordered input-primary w-full mb-4" />
            <input type="email" placeholder="Email" className="input input-bordered input-primary w-full mb-4" />
            <button className="btn btn-primary">Submit</button>
        </div>
    </div>
  )
}

export default HomePage