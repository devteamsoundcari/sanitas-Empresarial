import React from 'react'
import '../styles/Loader.css'

const Loader = ({ className }) => {
  return <span className={className ? className : 'loader'}></span>
}

export default Loader
