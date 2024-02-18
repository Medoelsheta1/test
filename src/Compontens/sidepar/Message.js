import React from 'react'
import { BsQuestionCircleFill } from "react-icons/bs";

const Message = () => {
  return (
    <div className='message'>
        <div className='icon mb-3 d-flex justify-content-center align-items-center'>
            <BsQuestionCircleFill />
        </div>
        <div className='messageText'>
            <h6>Need help?</h6>
            <p>Please check our docs</p>
        </div>
        <button className='btn'>DOCUMENTATION</button>
    </div>
  )
}

export default Message