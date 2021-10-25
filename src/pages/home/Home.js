import React from 'react'
import Album from '../../components/albums/Album'
import Sponsors from '../../components/sponsors/Sponsors'
import Header from '../../components/header/Header'
import Updates from '../../components/updates/Updates'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Album />
      <Updates />
      <Sponsors />
      <Footer />
    </div>
  )
}

export default Home
