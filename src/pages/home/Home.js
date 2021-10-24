import React from 'react'
import Album from '../../components/albums/Album'
import Header from '../../components/header/Header'
import Updates from '../../components/updates/Updates'

const Home = () => {
  return (
    <div>
      <Header />
      <Album />
      <Updates />
    </div>
  )
}

export default Home
