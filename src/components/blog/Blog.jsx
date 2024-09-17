import React from 'react'
import BlogCard from './BlogCard'
import Back from '../common/back/Back'
import "./blog.css"

const Blog = () => {
  return (
    <>
        <Back title="Blog"/>
        <section className='blog padding'>
            <div className='containe grid2'>
                <BlogCard/>
            </div>
        </section>
    </>
  )
}

export default Blog
