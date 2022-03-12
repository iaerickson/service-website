import React from 'react'
import "../../App.css"
import { Button } from '../Button'
import "./style.css"

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-2.mp4" autoPlay loop muted/>
    <h1>Welcome to SERVICE WEBSITE</h1>
    <p>Glad you could stop by</p>
    <div className='heto-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circl'></i></Button>

    </div>
    </div>
  )
}

export default HeroSection