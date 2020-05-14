import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({name}) => {
  return (
    <span>
      <Link to="/">
        <div className="Card complete">
          <div className="Card-element">
            <div className="Card-description">{name}</div>
          </div>
        </div>
      </Link>
    </span>
  );
}

export default Card;