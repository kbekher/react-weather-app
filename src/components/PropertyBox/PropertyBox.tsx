import React from 'react';

import './PropertyBox.scss';

type Props = {
  name: string;
  value: number;
  unit: string;
};

export const PropertyBox: React.FC<Props> = ({
  name,
  value,
  unit,
}) => (
  <div className="PropertyBox">
    <div className="PropertyBox__text-section">
      <span className="PropertyBox__name"> {name}</span>
      <div className="PropertyBox__value">
        {value} {unit}
      </div>
    </div>
    <div className={`PropertyBox__img PropertyBox__img--${name}`}>
      {' '}
    </div>
  </div>
);