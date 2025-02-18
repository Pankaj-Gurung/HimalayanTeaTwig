import React from 'react'
import heroimg1 from '../../Images/hero1.png'
import heroimg101 from '../../Images/hero1.1.jpg' 
import './Hero.scss'

const Hero = () => {
  return (
    <main className='hero-container'>
    <div className='firstimg-wrapper'>
    <img src={heroimg101} alt="" className='first-img101' />
     <div className='img1'>
        <h1>Original Tea</h1>
        <h1>From Ilam</h1>
        <p>Reasonable Pricing</p>
        <p>Hand Picked</p>   
    </div>   
    </div>

    <div className='secondimg-wrapper'></div>
    <div className='thirdimg-wrapper'></div>
    </main>
  )
}

export default Hero