import React from 'react'
import { LayoutProps } from '../../models'
import stylesCss from './avatar.module.scss'
const AvatarComponent: React.FC<LayoutProps> = ({ styles, src, alt }) => {
  return (
    <div className={stylesCss['avatar']}>
      <img style={{ ...styles, objectFit: 'contain' }} src={src} alt={alt} />
      <div className={stylesCss['avatar__status']}></div>
    </div>
  )
}
export default AvatarComponent
