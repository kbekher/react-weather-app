import React from 'react';

import './PropertyBox.scss';

type Props = {
  name: string;
  value: number;
  unit: string;
  img: string;
  alt: string;
};

export const PropertyBox: React.FC<Props> = ({
  name,
  value,
  unit,
  img,
  alt,
}) => {
  return (
    <div className="PropertyBox">
    <div className="PropertyBox__text-section">
      <span className="PropertyBox__name"> {name}</span>
      <div className="PropertyBox__value">
        {value} {unit}
      </div>
    </div>
    <div className="PropertyBox__image-section">
      <img 
        src={img} 
        alt={alt}
        className="PropertyBox__img"
      />
    </div>
  </div>
  )
}