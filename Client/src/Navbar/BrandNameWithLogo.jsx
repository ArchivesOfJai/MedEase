import React from 'react'

const defaultBrandDivSx = {
  display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 'max-content',
    gap: '0.5rem',
}

const defaultBrandImgSx = {
  height: '1.5rem',
    width: '1.5rem',
}

const defaultBrandNameSx = {
  margin: '0',
  fontSize: '1.5rem',
  fontWeight: '600',
}
function BrandNameWithLogo({imgUrl,brandName,brandNameSx={}}) {
  return (
    <div style={{...defaultBrandDivSx}}>
      <img src={imgUrl} alt={brandName} style={{...defaultBrandImgSx}}/>
      <p style={{...defaultBrandNameSx,...brandNameSx}}>{brandName}</p>
    </div>
  )
}

export default BrandNameWithLogo
