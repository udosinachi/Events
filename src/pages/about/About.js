import React from 'react'
import './About.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const About = () => {
  return (
    <div className='about'>
      <Navbar />
      <div className='about-div'>
        <div className='about-body'>
          <div className='about-img-div'>
            <img
              src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
              alt='about'
            />
          </div>

          <div className='about-text-div'>
            <p>
              Ready? If you're ready to talk then I'm here to listen. Send me a
              message and we'll start a conversation towards your next design. I
              look forward to building new sites or making invitations for that
              special event. I also enjoy meeting and collaborating with other
              designers. If you have a UI concept you'd like to see become a
              reality but lack the coding portion let's see what we can do.
              Media inquiries? Sure
            </p>

            <p>
              Click the icons for my respective social media accounts and my
              email
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
