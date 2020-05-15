import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import CodeBox from '../CodeBox';

const Card = ({name , text}) => {

  const [zoom, setZoomed] = useState(false);

  const handleZoomIn = () => {
    setZoomed(true);
    console.log({setZoomed});
  }

  const handleZoomOut = () => {
      setZoomed(false);
      console.log({setZoomed});
  }

  return (
    <span onClick={() => zoom ? handleZoomIn() : handleZoomOut()}>
      <Link to="/page-three">
        <div className="Card" activeclassname="active-card">
          <div className="Card-element">
            <div className="Card-description">{name}</div>
            <CodeBox text={text}/>
          </div>
        </div>
      </Link>
    </span>
  );
}

export default Card;