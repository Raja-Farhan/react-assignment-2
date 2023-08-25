import React from 'react'
import './Card.css'

const Card = ({title, content, image}) => {
  return (
    <>
        <div className='card border-0'>
            <img src={image} className='card-img-top m-auto' alt="" />
            <div className='card-body text-center'>
                <h2 className='card-title'>{title}</h2>
                <p className='card-text lh-base'>{content}</p>
            </div>
        </div>
    </>
  );
};

export default Card