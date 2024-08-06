import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BusinessList.css';
import Business from './Business';

const BusinessList = ({ businesses }) => {
  return (
    <Container>
      <Row>
        {businesses.map((business, index) => (
          <Col key={index} md={4}>
            <Business business={business} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BusinessList;
