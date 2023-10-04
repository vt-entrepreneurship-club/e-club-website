import React from 'react'
import ebenezer_zergabachew from '../assets/leadership_photos/ebenezer_zergabachew.jpg'
import LeadershipProfile from '../components/LeadershipProfile'

function Leadership() {

  const leadershipData = [
    {
      headshot: ebenezer_zergabachew,
      name: "Ebenezer Zergabachew",
      title: "Head of Technology",
      linkedin: "https://www.linkedin.com/in/ebenezer-zergabachew-aa41011a9/"
    }
  ]

  return (
    <div className='container'>
       <h1 className='text-4xl mb-20'>Entrepreneurship Club's Leadership</h1> 
        {
          leadershipData.map((leader) => (
            <LeadershipProfile
            name={leader.name}
            headshot={leader.headshot}
            title={leader.title}
            linkedin={leader.linkedin}
            ></LeadershipProfile>
          ))
        }
    </div>
  )
}

export default Leadership