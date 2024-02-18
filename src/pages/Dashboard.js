import React from 'react'
import SidePar from '../Compontens/sidepar/SidePar'
import ProductsContent from '../Compontens/ProductsContent'

const Dashboard = () => {
  return (
    <div className='wrapper d-flex justify-content-start align-items-start'>
        <SidePar/>
        <ProductsContent />
    </div>
  )
}

export default Dashboard