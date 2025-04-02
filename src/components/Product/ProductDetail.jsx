import React from 'react'
import Product from './Product'
import { useLocation, useParams } from 'react-router-dom'

const ProductDetail = () => {
  const location = useLocation()
  const product = location.state?.product
  console.log(product)
  return (
    <div className='mt-30 text-gray-500'>Sản phẩm mang id thứ {product.id}</div>
  )
}

export default ProductDetail
