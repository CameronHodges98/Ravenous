import React from 'react';
import { Card } from 'react-bootstrap';
import './Business.css';

const Business = ({ imageSrc, name, address, city, state, zipcode, category, rating, reviewCount }) => {
  return (
    <Card className="business-card">
      <Card.Img variant="top" src={imageSrc} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <div className="business-address">
            <p>{address}</p>
            <p>{city}</p>
            <p>{state} {zipcode}</p>
          </div>
          <div className="business-reviews">
            <h3>{category}</h3>
            <h3 className="rating">{rating} stars</h3>
            <p>{reviewCount} reviews</p>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Business;