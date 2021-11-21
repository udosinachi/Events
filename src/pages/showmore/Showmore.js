import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Showmore.css'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { useParams } from 'react-router'

const Showmore = () => {
  const [cardName, setCardName] = useState([])

  const { cats } = useParams()

  useEffect(() => {
    axios
      .get(`https://eventplanningweb.herokuapp.com/auth/users/category/${cats}`)
      .then((res) => {
        setCardName(res.data.classify)
      })
  }, [cats])

  return (
    <div className='showmore'>
      <Navbar />
      <div className='showmore-div'>
        {cardName.map((list) => {
          return (
            <div className='main-showmore' key={list._id}>
              <Link to='/profile' className='a'>
                <div className='showmore-image'>
                  <img src={list.image} alt='events' className='img' />
                </div>
                <div className='showmore-content'>
                  <p className='showmore-p'>{list.businessName}</p>
                  <h4 className='showmore-h4'>{list.email}</h4>
                  <p className='showmore-p2'>{list.category}</p>
                  <p className='showmore-p3'>{list.userText}</p>
                </div>
              </Link>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Showmore
