import React from 'react'
import { LayoutProps } from '../../models'
const ImageComponent: React.FC<LayoutProps> = ({ styles, src, alt }) => {
  return <img style={{ ...styles, objectFit: 'contain' }} src={src} alt={alt} />
}
export default ImageComponent
