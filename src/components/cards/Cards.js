import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Cards.css'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'

const Cards = ({ headText }) => {
  const [cardName, setCardName] = useState([])

  useEffect(() => {
    axios
      .get(
        `https://eventplanningweb.herokuapp.com/auth/users/category/${headText}`
      )
      .then((res) => {
        let slice = res.data.classify.slice(0, 4)
        setCardName(slice)
      })
  }, [headText])

  return (
    <div className='cards-div'>
      <h5>{headText}</h5>
      <div className='cards'>
        {cardName.map((list) => {
          return (
            <div className='main-cards' key={list._id}>
              <Link to='/profile' className='a'>
                <div className='cards-image'>
                  <img src={list.image} alt='events' className='img' />
                </div>
                <div className='card-content'>
                  <p className='card-p'>{list.businessName}</p>
                  <h4 className='card-h4'>{list.email}</h4>
                  <p className='card-p2'>{list.category}</p>
                  <p className='card-p3'>{list.userText}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
      <div className='showmore-button'>
        <Link to={`/showmore/${headText}`} className='a'>
          <Button
            type='button'
            variant='contained'
            sx={{ mt: 1, mb: 2 }}
            className='button1'
          >
            Show More
          </Button>
        </Link>
      </div>
      <Divider />
    </div>
  )
}

export default Cards
