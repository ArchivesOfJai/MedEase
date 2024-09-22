import React from 'react'
import './BrandNameWithLogo.css'


function BrandNameWithLogo({imgUrl,brandName,brandNameStyle}) {
  return (
    <div className='brand'>
      <img src={imgUrl} alt={brandName} />
      <p style={brandNameStyle}>{brandName}</p>
    </div>
  )
}

export default BrandNameWithLogo
