import React from 'react'
import './ProductFilter.scss'
import prBanner from '../../../assets/productBanner.jpg'
const ProductFilter = ({ categories = [], selectedCategoryId = null, selectedSubcategoryId = null, onCategoryChange = () => {}, onSubcategoryChange = () => {} }) => {
  const selectedCategory = categories.find(cat => cat.id === selectedCategoryId) || null;

  return (
   <section id='productFilter'>
    <div className="productBanner" style={{ backgroundImage: `url(${prBanner})` }}>
        <div className="overlay">
            <h1>Products</h1>
        </div>
        
    </div>
    <div className="container">
            <div className="filterBtns">
                <h3>Categorys</h3>
                <ul>
                    <li onClick={() => { onCategoryChange(null); onSubcategoryChange(null); }} className={selectedCategoryId === null ? 'active' : ''}>All</li>
                    {categories.map(category => (
                      <li key={category.id} onClick={() => { onCategoryChange(category.id); onSubcategoryChange(null); }} className={selectedCategoryId === category.id ? 'active' : ''}>
                        {category.name}
                      </li>
                    ))}
                </ul>
               
            </div>
             {selectedCategory && (
                  <div className="filterBtns">
                    <h3>Subcategories</h3>
                    <ul>
                      <li onClick={() => onSubcategoryChange(null)} className={selectedSubcategoryId === null ? 'active' : ''}>All</li>
                      {selectedCategory.subcategory?.map(sub => (
                        <li key={sub.id} onClick={() => onSubcategoryChange(sub.id)} className={selectedSubcategoryId === sub.id ? 'active' : ''}>
                          {sub.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
    </div>
   </section>
  )
}

export default ProductFilter