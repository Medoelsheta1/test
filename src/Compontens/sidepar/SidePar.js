import React, { useState } from 'react'
import Lists from './Lists'
import image from '../../assets/images/Group 21.png'
import Message from './Message'
import { FaThList } from "react-icons/fa";

const SidePar = () => {
    const [viewSidePar , setViewSidePar] = useState(false)
    const handleSidePar = () => {
        setViewSidePar(!viewSidePar)
    }
    return (
        <>
        
        <div className={`sidepar pb-4 pt-3 ${viewSidePar ? 'active' : 'noneActive'}`}>
            <FaThList className='menueIcon' onClick={handleSidePar} />
            <div className='logo'>
                <img src={image}  alt='logo'/>
            </div>
            <div className='line mt-2'><span></span></div>
            <Lists />
            <Message />
        </div>
        </>
    )
}

export default SidePar