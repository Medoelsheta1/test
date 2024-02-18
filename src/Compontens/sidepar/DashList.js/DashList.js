import { MdKeyboardArrowDown } from "react-icons/md";
import DashLinks from "./DashLinks";
import { useState } from "react";
const DashList = (props) => {
    const [showAltLinks , setShowAltLinks] = useState(false)
    const handleAltLinks = () => {
        setShowAltLinks(!showAltLinks)
    }
    return (
        <>
    <div className='menuItem mt-3 d-flex justify-content-between align-items-center'>
        <div className={`icon d-flex justify-content-center align-items-center ${props.dark ? 'dark' : 'light'}`}>
            {props.icon}
        </div>
        <div className='text'>
            {props.text}
        </div>
        <MdKeyboardArrowDown className='arrowDown' onClick={handleAltLinks} />
    </div>
    {showAltLinks && <DashLinks links={props.links} /> }
        </>
    )
}


export default DashList