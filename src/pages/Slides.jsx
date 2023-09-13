import React from 'react'
import pdf from '../assets/E-Club 2023 Kickoff Slides.pdf'

function Slides() {
  return (
    <div className='h-96 w-max'>
        <a className='btn btn-primary w-full' href={pdf}>Click Here for Todays Slides</a>
    </div>
  )
}

export default Slides