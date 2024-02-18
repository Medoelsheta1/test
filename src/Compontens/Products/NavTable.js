import React from 'react'

const NavTable = () => {
    return (
        <div className='navTable w-10 d-flex justify-content-between align-items-center'>
            <div className='tableControles d-flex justify-content-center align-items-center'>
            <input type="number" className='me-2' id="showMe" value="1"/>

                <p>entries per page</p>
            </div>
            <div className='navInput'>
                <input type='text' placeholder='Search here...' />
            </div>
        </div>
    )
}

export default NavTable