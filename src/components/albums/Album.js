import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Album.css'
import Cards from '../cards/Cards'

const Album = () => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    axios
      .get('https://eventplanningweb.herokuapp.com/category/allcategory')
      .then((res) => {
        setCategory(res.data.categories)
      })
  }, [])

  return (
    <div className='album'>
      <div className='album-div'>
        <h2>CATEGORIES OF SERVICES OFFERED</h2>
        {category.map((cat) => {
          return (
            <div key={cat._id}>
              <Cards headText={cat.name} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Album
