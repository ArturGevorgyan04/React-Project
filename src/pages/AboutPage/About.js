import './About.css'
import React from 'react'
import Likes from '../../components/Likes/Likes'
import Title from '../../components/Title/Title'
import galactic from './galactic.jpg'
import Comments from '../../components/Comments/Comments'

export default function AboutPage() {
    return (
      <div className='about'>
        <div className='wrap'>
          <div className='card'>
            <div className='card-image'>
              <img src={galactic} alt='galactic'/>
              <Title/>
              <Likes/>
            </div>
            <Comments/>
          </div>
        </div>
      </div>
    )
}
