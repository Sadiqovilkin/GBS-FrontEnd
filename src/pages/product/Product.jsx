import React from 'react'
import ProductCard from './productCard/ProductCard'
import { productsData } from '../../MyDatas/MyDatas'

const Product = () => {
  
  return (
  <main>
    <ProductCard data={productsData}/>
  </main>
  )
}

export default Product