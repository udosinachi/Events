import React from 'react'
import Album from '../../components/albums/Album'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Album />
      <Footer />
    </div>
  )
}

export default Home
