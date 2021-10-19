import React from 'react'
import './Album.css'
import Cards from '../cards/Cards'

const Album = () => {
  return (
    <div className='album'>
      <h2>CATEGORIES OF SERVICES OFFERED</h2>
      <Cards category='Caterers' />
      <Cards category='DJ' />
      <Cards category='Cakes' />
      <Cards category='Decoration' />
      <Cards category='MC' />
    </div>
  )
}

export default Album
