import React from 'react'
import './Contactus.css'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

const Contactus = () => {
  return (
    <div className='contact'>
      <Navbar />
      <div className='contact-div'>
        <div style={{ marginTop: '130px' }} className='body'>
          <div className='text'>
            <h2>Contact Us</h2>
            <p>Get more updates</p>
          </div>
          <div className='bodyform'>
            <form className='form1'>
              <h2 className='contact-h1'>Let's Work Together</h2>
              <input type='text' placeholder='Name' className='input1' />
              <br />
              <input
                type='email'
                placeholder='Email Address'
                className='input1'
              />
              <br />
              <input type='text' placeholder='Subject' className='input1' />
              <br />
              <textarea placeholder='Hello there' className='textarea1' />
              <br />
              <button className='button1'>Let's Talk Soon</button>
            </form>
            <div className='social'>
              <p>
                Ready? If you're ready to talk then I'm here to listen. Send me
                a message and we'll start a conversation towards your next
                design. I look forward to building new sites or making
                invitations for that special event. I also enjoy meeting and
                collaborating with other designers. If you have a UI concept
                you'd like to see become a reality but lack the coding portion
                let's see what we can do. Media inquiries? Sure
              </p>

              <p>
                Click the icons for my respective social media accounts and my
                email
              </p>
            </div>
          </div>
        </div>
        <div className='contact-footer'></div>
      </div>
      <Footer />
    </div>
  )
}

export default Contactus
