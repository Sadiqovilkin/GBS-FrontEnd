import React from 'react'
import DetailBanner from './detailBanner/DetailBanner'
import { useParams } from 'react-router-dom';
import { productsData } from '../../MyDatas/MyDatas';
import DetailDescription from './detailDescription/DetailDescription';

const ProductDetail = () => {
    const { slug } = useParams();

   const product = productsData.find((p) => p.id === slug); // ✅ məhsulu tapırıq

  return (
    <main>
      <DetailBanner data={product}/>
      <DetailDescription/>
    </main>
  )
}

export default ProductDetail