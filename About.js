import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos'
import 'aos/dist/aos.css';

import Card from './Card'
import img1 from './cardImages/img1.jpg'
import img2 from './cardImages/img2.jpg'
import img3 from './cardImages/img3.JPG'

let title ='About Us' 
let title2 = 'Vision' 
let title3 = 'Mission' 

let desc = 'We are the best when it comes to intranational dishes'
let desc2 = 'To be Nigerias number one delight'
let desc3 = 'To bring maximum satisfation to all our customers in terms of quality and quantity'



const About = () => {
  

  useEffect(() => {
    Aos.init();
  }, [])
  return ( 
    <section className='py-4 py-lg-5 container'>
      <div className='row'>

          <Card aos='fade-up' aos_offset='100' img={img1} title={title} desc={desc} />,
          <Card aos='fade-left' aos_offset='100' img={img2} title={title2} desc={desc2} />,
          <Card aos='fade-top' aos_offset='100' img={img3} title={title3} desc={desc3} />
          

      </div>

    </section>
   );
}
 
export default About;