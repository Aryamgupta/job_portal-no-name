import React from 'react'
import goFor from './Images/gofor.svg'

const Blogs = () => {
  return (
    <div className='container-xl mainBlogsDiv'>
      <h2 className="majorHeadingClass">All Blogs</h2>
      <div className='content'>
        <div className='homeOneBlogContainer row'>
            <p className='col-xl-5 col-lg-5 col-md-5 ques'>Why Naval Ravikant Thinks Remote Work Is The Future</p>
            <p className='col-xl-5 col-lg-5 col-md-5 des'>It feels like the rise of remote works has been a top conversation in tech for years, but despite the enthusiasm and attention it receives, we've yet to turn the corner on making remote work a norm.</p>
            <button className='col-xl-1 col-lg-1 col-md-1'><img src={goFor} fill="red"/></button>
            <p className='col-xl-12 date'>Nov 11, 2022</p>
        </div>
        <div className='homeOneBlogContainer row'>
            <p className='col-xl-5 col-lg-5 col-md-5 ques'>Why Naval Ravikant Thinks Remote Work Is The Future</p>
            <p className='col-xl-5 col-lg-5 col-md-5 des'>It feels like the rise of remote works has been a top conversation in tech for years, but despite the enthusiasm and attention it receives, we've yet to turn the corner on making remote work a norm.</p>
            <button className='col-xl-1 col-lg-1 col-md-1'><img src={goFor}/></button>
            <p className='col-xl-12 date'>Nov 11, 2022</p>
        </div>
        <div className='homeOneBlogContainer row'>
            <p className='col-xl-5 col-lg-5 col-md-5 ques'>Why Naval Ravikant Thinks Remote Work Is The Future</p>
            <p className='col-xl-5 col-lg-5 col-md-5 des'>It feels like the rise of remote works has been a top conversation in tech for years, but despite the enthusiasm and attention it receives, we've yet to turn the corner on making remote work a norm.</p>
            <button className='col-xl-1 col-lg-1 col-md-1'><img src={goFor}/></button>
            <p className='col-xl-12 date'>Nov 11, 2022</p>
        </div>
        
       

      </div>
    </div>
  )
}

export default Blogs
