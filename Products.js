
import React from 'react'
import './products.css'

import Suya from './images/Suya.jpg';
import Roasted_Plantain from './images/Roasted_Plantain.jpg';
import Puff_Puff from './images/Puff_Puff.jpg';
import Pounded_Yam from './images/Pounded_Yam.jpg';
import Pepper_Soup from './images/Pepper_Soup.jpg';
import Okro_Soup from './images/Okro_Soup.jpg';
import Ofada_Stew from './images/Ofada_Stew.jpg';
import Nigerian_Jollof from './images/Nigerian_Jollof.jpg';
import Moi_Moi from './images/Moi_Moi.jpg';
import Jollof_Rice from './images/Jollof_Rice.jpeg';
import Fried_Plantain from './images/Fried_Plantain.jpg';
import Ewa_Agoyin from './images/Ewa_Agoyin.jpg';
import Egusi_Soup from './images/Egusi_Soup.jpg';
import Efo_Riro from './images/Efo_Riro.jpg';
import Beef_Stew from './images/Beef_Stew.jpg';
import Akara from './images/Akara.jpg';

import './images/restaurantImg.JPG'




const Products = () => {

  const foods = [
    {id:1, foodname: 'Puff-Puff', image: Puff_Puff, price: '$0.5'},
    {id:2, foodname: 'Akara', image: Akara, price: '$0.5'},
    {id:3, foodname: 'Beef Stew', image: Beef_Stew, price: '$5'},
    {id:4, foodname: 'Efo Riro', image: Efo_Riro, price: '$3'},
    {id:5, foodname: 'Egusi Soup', image: Egusi_Soup, price: '$6'},
    {id:6, foodname: 'Ewa Agoyin', image: Ewa_Agoyin, price: '$2.5'},
    {id:7, foodname: 'Fried Plantain', image: Fried_Plantain, price: '$1'},
    {id:8, foodname: 'Jollof Rice', image: Jollof_Rice, price: '$10'},
    {id:9, foodname: 'Moi Moi', image: Moi_Moi, price: '$2'},
    {id:10, foodname: 'Nigerian Jollof', image: Nigerian_Jollof, price: '$12'},
    {id:11, foodname: 'Ofada Stew', image: Ofada_Stew, price: '$1.5'},
    {id:12, foodname: 'Okro Soup', image: Okro_Soup, price: '$5'},
    {id:13, foodname: 'Pepper Soup', image: Pepper_Soup, price: '$15'},
    {id:14, foodname: 'Pounded Yam', image: Pounded_Yam, price: '$3'},
    {id:15, foodname: 'Roasted Plantain', image: Roasted_Plantain, price: '$4'},
    {id:16, foodname: 'Suya', image: Suya, price: '$7'},



    
  ]


  return ( 
    <div className='rest-page' src='././images/restaurantImg.JPG' alt=''>

      <div className='cards' >

        {
          foods && foods.map((food) => 
          <div className='card-box'>
            

             <div className='card-images'>
               <img src={food.image} alt="" />
              </div>

              <div className='image-details'>
                <p> <h8> {food.foodname} </h8> </p>
                <div className='price'><p> {food.price} </p></div>
              </div>
          </div>
          )
        }
      </div>

    </div>
   );
}
 
export default Products ;