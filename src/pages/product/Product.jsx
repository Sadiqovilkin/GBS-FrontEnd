import React from 'react'
import ProductCard from './productCard/ProductCard'
import { productsData } from '../../MyDatas/MyDatas'
import ProductFilter from './productFilter/ProductFilter'
import { useState, useMemo } from 'react'
import { categoryData } from '../../MyDatas/MyDatas'

const Product = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null)
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState(null)

  const filteredProducts = useMemo(() => {
    let result = productsData
    if (selectedCategoryId) {
      result = result.filter(p => p.category === selectedCategoryId)
    }
    if (selectedSubcategoryId) {
      result = result.filter(p => p.subcategory === selectedSubcategoryId)
    }
    return result
  }, [selectedCategoryId, selectedSubcategoryId])

  return (
  <main>
    <ProductFilter
      categories={categoryData}
      selectedCategoryId={selectedCategoryId}
      selectedSubcategoryId={selectedSubcategoryId}
      onCategoryChange={setSelectedCategoryId}
      onSubcategoryChange={setSelectedSubcategoryId}
    />
    <ProductCard data={filteredProducts}/>
  </main>
  )
}

export default Product