import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


  
  const divStyle = {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    backgroundSize: 'cover',
    width: '100%',
    height: '400px',
    marginTop: '62px'
  }

  const buttonStyle = {
    display: 'none'
  }

  const properties = {
    prevArrow: <button style={{ ...buttonStyle, 'display': 'none' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle, 'display': 'none' }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}
  const slideImages = [
    {
      url: './web.webp',
      caption1: 'Crafting Unique Online Experiences:',
      caption2: 'Elevate Your Brand with Custom Website Solution.'
    },
    {
      url: './e-com.png',
      caption1: 'Empower Your Business with Seamless Online Retail:',
      caption2: 'Transform Your Vison into an E-commerce Powerhouse.'
    },
    {
      url: './web.webp',
      caption1: 'Innovation Solutions, Tailored to Your Needs:',
      caption2: 'Streamline Operations with Custom Software Development.'
    },
    {
        url: './photo.jpg',
        caption1: 'Unleash Creativity, Capture Moments:',
        caption2: 'ELevate Your Visual COntent with Professional Photo and Video Editing Services'
    },
    {
        url: './graphics.webp',
        caption1: 'From Concept to Creation:',
        caption2: 'Build Your Brand Identity with Stunning Graphic Design Solutions.'
    },
    {
        url: './market.webp',
        caption1: 'Unlock Insights, Drive Success:',
        caption2: 'Gain Strategic Advantage with Data-Driven Market Research and Analytics.'
    },
  ];

  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide 
        {...properties} 
        transitionDuration={1000}
        duration={7700}
        >
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <div className="text-white lg:pl-[90px] pl-[20px] mt-[90px]">
                    <div className="font-bold lg:text-[50px]  text-[2rem] leading-[1] font-mono lg:mt-10 lg:leading-[1] shadow">
                        <h1 className='tracking-[-2.05px]'>{slideImage.caption1}</h1>
                        <p className='text-xs leading-0 font-mono mt-1'>{slideImage.caption2}</p>
                    </div>
                    
                </div>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;