import React from 'react'
import './Album.css'
import Cards from '../cards/Cards'

const Album = () => {
  return (
    <div className='album'>
      <h2>CATEGORIES OF SERVICES OFFERED</h2>
      <Cards />
      <Cards />
      <Cards />
      <Cards />
      <Cards />
    </div>
  )
}

export default Album
