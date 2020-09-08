import React from 'react';

import './Card.css';

export const Card = () => {
  return (
    <div className='card'>
      <span className='card__text'>Сказачное заморское яство</span>
      <h3 className='card__title'>Нямушка</h3>
      <span className='card__sub-title'>с фуа-гра</span>
      <br />
      <span className='card__sub-text'>10 порций мышь в подарок </span>

      <div className='card__circle'>0,5 кг</div>
    </div>
  );
};
