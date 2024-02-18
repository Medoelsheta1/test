import React from 'react'
import HeaderProducts from './HeaderProducts'
import ProductsTable from './ProductsTable'
import NavTable from './NavTable'

const Products = () => {
    return (
        <div>
            <HeaderProducts />
            <NavTable />
            <ProductsTable />
        </div>
    )
}

export default Products