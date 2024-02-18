import React from 'react'

const HeaderProducts = () => {
    return (
        <div className='headerProducts d-flex justify-content-between align-items-center'>
            <div className='col-6 col-md-8 productsText'>
                <h4>All Products</h4>
                <p>A lightweight, extendable, dependency-free javascript HTML table plugin.</p>
            </div>
            <div className=' col-6 col-md-4 productsButtons d-flex justify-content-evenly align-items-center'>
                <button className="btn text-white">+ product</button>
                <button className="btn">Import</button>
                <button className="btn">Export</button>
            </div>
        </div>
    )
}

export default HeaderProducts