import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Album.css'
import Cards from '../cards/Cards'
import { toast } from 'react-toastify'
import LinearProgress from '@mui/material/LinearProgress'

const Album = () => {
  const [category, setCategory] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    axios
      .get('https://eventplanningweb.herokuapp.com/category/allcategory')
      .then((res) => {
        setCategory(res.data.categories)
        setLoader(false)
      })
      .catch((err) => {
        toast.error('Unable to Display Categories')
        setLoader(false)
      })
  }, [])

  return (
    <div className='album'>
      <div className='album-div'>
        <h2>CATEGORIES OF SERVICES OFFERED</h2>
        {loader === true ? (
          <LinearProgress />
        ) : (
          <>
            {category.map((cat) => {
              return (
                <div key={cat._id}>
                  <Cards headText={cat.name} />
                </div>
              )
            })}
          </>
        )}
      </div>
    </div>
  )
}

export default Album
