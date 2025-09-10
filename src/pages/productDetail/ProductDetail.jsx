import React from 'react'
import DetailBanner from './detailBanner/DetailBanner'
import { useParams } from 'react-router-dom';
import { productsData } from '../../MyDatas/MyDatas';

const ProductDetail = () => {
    const { slug } = useParams();

   const product = productsData.find((p) => p.id === slug); // ✅ məhsulu tapırıq

  return (
    <main>
      <DetailBanner data={product}/>
    </main>
  )
}

export default ProductDetail