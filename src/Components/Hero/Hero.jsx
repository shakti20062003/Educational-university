import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>We Ensure better education for better world</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, quas consequatur recusandae labore est dolore incidunt quasi exercitationem fugit mollitia, atque hic distinctio, beatae et. Quod, eveniet debitis. Itaque, fuga.
            </p>
            <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero
