import React from 'react'
import NavPar from './nav/NavPar'
import Products from './Products/Products'

const ProductsContent = () => {
    return (
        <div className='d-flex flex-column w-100 p-4 pt-0'>
            <NavPar />
            <Products />
        </div>
    )
}

export default ProductsContent