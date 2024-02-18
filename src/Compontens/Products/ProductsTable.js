import React from 'react'
import img1 from '../../assets/images/products/1.png'
import img2 from '../../assets/images/products/2.png'
import img3 from '../../assets/images/products/3.png'
import img4 from '../../assets/images/products/4.png'
import img5 from '../../assets/images/products/5.png'
import vector from '../../assets/icons/Vector.svg'
import { BsPersonFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";

const ProductsTable = () => {
    const products = [
        {
            name: "Pasta",
            code :20120122,
            brand: "N/A",
            category: "Food",
            quantity: 10,
            unit: 'Piece',
            price: 10,
            cost: 10,
            imageSrc: img1
        },
        {
            name: "Meat",
            code :20120122,
            brand: "N/A",
            category: "Food",
            quantity: 10,
            unit: 'Piece',
            price: 10,
            cost: 10,
            imageSrc: img2
        },
        {
            name: "Chicken",
            code :20120122,
            brand: "N/A",
            category: "Food",
            quantity: 10,
            unit: 'Piece',
            price: 10,
            cost: 10,
            imageSrc: img3
        },
        {
            name: "Fish",
            code :20120122,
            brand: "N/A",
            category: "Food",
            quantity: 10,
            unit: 'Piece',
            price: 10,
            cost: 10,
            imageSrc: img4
        },
        {
            name: "Tomato",
            code :20120122,
            brand: "N/A",
            category: "Food",
            quantity: 10,
            unit: 'Piece',
            price: 10,
            cost: 10,
            imageSrc: img5
        },
        {
            name: "Tomato",
            code :20120122,
            brand: "N/A",
            category: "Food",
            quantity: 10,
            unit: 'Piece',
            price: 10,
            cost: 10,
            imageSrc: img5
        },
        {
            name: "Tomato",
            code :20120122,
            brand: "N/A",
            category: "Food",
            quantity: 10,
            unit: 'Piece',
            price: 10,
            cost: 10,
            imageSrc: img5
        }
        
    ]
    return (
        <div className='tableContainer'>
        <table className="table mt-5">
        <thead>
            <tr>
                <th scope="col"><img className='me-2' src={vector} alt='vector' /></th>
                <th scope="col">
                    <img className='me-2' src={vector} alt='vector' />
                    Image
                    </th>
                <th scope="col"><img className='me-2' src={vector} alt='vector' />Name</th>
                <th scope="col"><img className='me-2' src={vector} alt='vector' />Code</th>
                <th scope="col"><img className='me-2' src={vector} alt='vector' />Brand</th>
                <th scope="col"><img className='me-2' src={vector} alt='vector' />Category</th>
                <th scope="col"><img className='me-2' src={vector} alt='vector' />Quantity</th>
                <th scope="col"><img className='me-2' src={vector} alt='vector' />Unit</th>
                <th scope="col"><img className='me-2' src={vector} alt='vector' />Price</th>
                <th scope="col"><img className='me-2' src={vector} alt='vector' />Cost</th>
                <th scope="col"><img className='me-2' src={vector} alt='vector' />Actions</th>
            </tr>
        </thead>
        <tbody>
            {products.map((ele) => <tr key={ele?._id} className='tableProducts text-center'>
                    <td className='d-flex justify-content-center align-items-end '><input type='checkbox' /></td>
                    <td ><img src={ele.imageSrc} alt='product-img'/></td>
                    <td>{ele.name}</td>
                    <td>{ele.code}</td>
                    <td>{ele.brand}</td>
                    <td>{ele.category}</td>
                    <td>{ele.quantity}</td>
                    <td>{ele.unit}</td>
                    <td>{ele.price}</td>
                    <td>{ele.cost}</td>
                    <td className='d-flex justify-content-center align-items-end '>
                        <div className='actions'>
                            <BsPersonFill />
                            <FaEdit />
                            <FaEye />
                            <RiDeleteBin7Fill />
                        </div>
                    </td>
                    
                </tr> )}
            

            
        </tbody>
        </table>
        </div>
    )
}

export default ProductsTable