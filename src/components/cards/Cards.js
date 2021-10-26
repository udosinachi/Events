import React from 'react'
import './Cards.css'
import CardList from './CardList'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { Link } from 'react-router-dom'

const Cards = ({ category }) => {
  return (
    <div className='cards-div'>
      <h5>{category}</h5>
      <div className='cards'>
        {CardList.map((list) => {
          return (
            <div className='main-cards' key={list.id}>
              <Link to='/profile' className='a'>
                <div className='cards-image'>
                  <img
                    src='/assets/optician.jpg'
                    alt='events'
                    className='img'
                  />
                </div>
                <div className='card-content'>
                  <p className='card-p'>{list.name}</p>
                  <h4 className='card-h4'>{list.text}</h4>
                  <p className='card-p2'>{list.name}</p>
                  <p className='card-p3'>{list.text}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
      <div className='showmore-button'>
        <Button
          type='button'
          variant='contained'
          sx={{ mt: 1, mb: 2 }}
          className='button1'
        >
          Show More
        </Button>
      </div>
      <Divider />
    </div>
  )
}

export default Cards
