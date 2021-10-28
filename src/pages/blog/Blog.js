import * as React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import BlogPost from './BlogPost'
import './Blog.css'
import BlogFilter from './BlogFilter'

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className='blog'>
        <div className='blog-div'>
          <div className='blog-filter'>
            <p className='profile-text-header'> POSTS</p>
            <div>
              <BlogFilter />
            </div>
          </div>
          <BlogPost />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blog
