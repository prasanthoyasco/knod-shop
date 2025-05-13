import React from 'react'
import './Kitchen.css'
import kitchenImmage from '../../assets/Faber.png'
function Kitchent() {
  return (
    <div className='kitchen-container'>
      <img src={kitchenImmage} className='kitchen-image'/>
      <div className='kitchen-content'>
        <p>Welcome to Knobs shop!</p>
        <h1>Crafted for Creators. 
Trusted by Pros.</h1>
        <p>Trusted by architects, builders & carpenters for
quality and style.</p>
        <button>More About us</button>
      </div>
    </div>
  )
}

export default Kitchent
