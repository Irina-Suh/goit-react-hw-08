import React from 'react'
import { Link } from 'react-router-dom'

import NotFoundImg from '../assets/images/404.avif'



const NotFound = () => {
  return (
    <div >
       <Link to="/" >Back to HOME</Link>
    <img src={NotFoundImg} alt="404" width="500"/>
 
    </div>
  )
}

export default NotFound