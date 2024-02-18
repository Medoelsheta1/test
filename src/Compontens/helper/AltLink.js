import React from 'react'
import { Link } from 'react-router-dom'

const AltLink = (props) => {
  return (
    <div className='link mb-3 w-100 d-flex justify-content-start align-items-center'>
        <span className='bullet'></span>
        <Link>{props.text}</Link>
    </div>  
  )
}

export default AltLink