import React from 'react'
import Headerleft from './Headerleft'
import Subtitle from './Subtitle'
import Nav from './Nav'
import './Header.css'

export const Header = () => {
  return (
    <header>
    <div className='container container-flex'>
    <div className='site-tittle'>
      <Headerleft/>
      <Subtitle/>
      </div>
      <Nav/> 
      </div>
      </header>
  )
}
export default Header
