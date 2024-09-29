import React from 'react'
import styled from 'styled-components'



function Text({type,className, children,sx={},...props}) {
   if(type === 'h1'){  
    const Text_div = styled.h1`
      font-size: 32px;
      font-weight: 700;
      line-height: 40px;
      @media (max-width: 768px) {
        font-size: 24px;
        line-height: 32px;
      } 
    `
    return ( 
      <Text_div className={className} style={{...sx}} {...props}>
        {children}
      </Text_div>
    )
   }

   if(type === 'h2'){
    const Text_div = styled.h2`
      font-size: 24px;
      font-weight: 700;
      line-height: 32px;
      @media (max-width: 768px) {
        font-size: 20px;
        line-height: 28px;
      } 
    `
    return ( 
      <Text_div className={className} style={{...sx}} {...props}>
        {children}
      </Text_div>
    )
   }

   if(type === 'h3'){
    const Text_div = styled.h3`
      font-size: 20px;
      font-weight: 700;
      line-height: 28px;
      @media (max-width: 768px) {
        font-size: 16px;
        line-height: 24px;
      } 
    `
    return ( 
      <Text_div className={className} style={{...sx}} {...props}>
        {children}
      </Text_div>
    )
   }
   if(type === 'p'){
    const Text_div = styled.p`
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 20px;
      } 
    `
    return ( 
      <Text_div className={className} style={{...sx}} {...props}>
        {children}
      </Text_div>
    )
   } 
   if(type === 'span'){
    const Text_div = styled.span`
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 20px;
      }
    `
    return ( 
      <Text_div className={className} style={{...sx}} {...props}>
        {children}
      </Text_div>
    )
   }

   if(type==='h4'){
    const Text_div = styled.h4`
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 20px;
      } 
    `
    return ( 
      <Text_div className={className} style={{...sx}} {...props}>
        {children}
      </Text_div>
    )   
   }

   if(type==='h5'){
    const Text_div = styled.h5`
      font-size: 14px;
      font-weight: 700;
      line-height: 20px;
      @media (max-width: 768px) {
        font-size: 12px;
        line-height: 18px;
      } 
    `
    return ( 
      <Text_div className={className} style={{...sx}} {...props}>
        {children}
      </Text_div>
    )   
   }
   if(type==='h6'){
    const Text_div = styled.h6`
      font-size: 12px;
      font-weight: 700;
      line-height: 18px;
      @media (max-width: 768px) {
        font-size: 10px;
        line-height: 16px;
      } 
    `
    return ( 
      <Text_div className={className} style={{...sx}} {...props}>
        {children}
      </Text_div>
    )   
   }
}

export default Text
