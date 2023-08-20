import React from 'react';
import './Card.css'
import card_image from '../../asset/img/Cut.png'

const Card = () => {
  

  return (
    <>
    <h3 style={{textAlign:'center', textTransform:'uppercase',}}>Cắt ảnh</h3>
    <div className="card">
      <img src={card_image} alt="" className='card_img'/>
      <div className='card_body'>
        <h1 className='card-title'>Cut image</h1>
        <p className='card-sub-title'>cắt ảnh rất oke nhé hehehe</p>
        <button className='card-btn'>123</button>

      </div>
    </div>
    </>
  );
};

export default Card;
