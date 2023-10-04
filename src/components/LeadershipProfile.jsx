import React from 'react'

function LeadershipProfile({headshot, name, title, linkedin, yearsActive, bio}) {
  return (
    <div>
        <img className='w-1/6 lg:float-left lg:mr-12' src={headshot} alt="" />
        <div className="float-left">
          <span className='lg:float-left text-2xl text-primary'>{name}</span>
          <br />
          <div className="clear-left"></div>
          <span className=''>{title}</span>
          <br />
          {/* <span>{yearsActive}</span>
          <p>{bio}</p> */}
          <a href={linkedin}>LinkedIn</a>
        </div>
        
    </div>
  )
}

export default LeadershipProfile