import React from 'react'
import HomeBottom from '../HomeBottom'
import MainHome from '../MainHome'
import Marquee from '../Marquee'
import Slider from '../Slider'

export default function Main() {
  return (
    <div className='app root'>
        <Slider />
        <Marquee />
        <MainHome />
        <HomeBottom />
    </div>
  )
}
