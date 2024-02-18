import React from 'react'
import { IoPerson } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdSettings } from "react-icons/io";
import { LuBellRing } from "react-icons/lu";

const NavPar = () => {
    return (
        <div className='navPar d-flex justify-content-between align-items-center w-100'>
            <div className='navLeft mt-4 d-flex flex-column justify-content-center align-items-center'>
                <p><span>Pages</span> / Product list</p>
                <p>Product list</p>
            </div>
            <div className='navRight d-flex justify-content-center align-items-center'>
                <div className='input'>
                    <CiSearch />
                    <input placeholder='search' type='text' />
                </div>
                <div className='icons d-flex justify-content-center align-items-center'>
                    <IoPerson />
                    <p>Sign in</p>
                    <IoMdSettings />
                    <LuBellRing />
                </div>
            </div>
        </div>
    )
}

export default NavPar