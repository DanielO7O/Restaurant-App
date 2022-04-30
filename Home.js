import { useState, useEffect} from 'react'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import {foods} from './slide_images.js'

import './Home.scss'


const Home = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = foods.length;
  // slideLength = 1 2 3 4 5 6 7
  // currentSlide = 0 1 2 3 4 5 6

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1 );
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1 );
  }

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }


  useEffect(() => {
    setCurrentSlide(0) 
  }, [])


  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide])


  return (
    <div className='slider'>
      <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide} />
      <AiOutlineArrowRight className='arrow next' onClick={nextSlide} />

      {foods.map((slide, index) => {
        return (
          <div className={index === currentSlide ? 
          'slide current' : 'slide'} key={index}>

            {index === currentSlide && (
              <>
                <img src={slide.image} alt='slide' />
                <div className="content">
                  <h1>{slide.foodname}</h1>
                  <p>{slide.desc}</p>
                  <hr />
                  <button href='/Products' className="--btn 
                  --btn-primary">Order Now</button>
                </div>
              </>
              
            )}
          </div>
        )
      })}

    </div>
  )
}

export default Home