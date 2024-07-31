import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
};

const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const getSortByClass = (sortByOption) => {
    return sortBy === sortByOption ? 'active' : '';
  };

  const handleSortByChange = (sortByOption) => {
    setSortBy(sortByOption);
  };

  const handleTermChange = (event) => {
    setTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    searchYelp(term, location, sortBy);
    event.preventDefault();
  };

  const renderSortByOptions = () => {
    return Object.keys(sortByOptions).map((sortByOption) => {
      let sortByOptionValue = sortByOptions[sortByOption];
      return (
        <li 
          key={sortByOptionValue} 
          className={`sort-option ${getSortByClass(sortByOptionValue)}`} 
          onClick={() => handleSortByChange(sortByOptionValue)}>
          {sortByOption}
        </li>
      );
    });
  };

  return (
    <Container className="SearchBar">
      <Row>
        <Col>
          <div className="SearchBar-sort-options">
            <ul>
              {renderSortByOptions()}
            </ul>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <Form.Control 
            type="text" 
            placeholder="Search Businesses" 
            value={term} 
            onChange={handleTermChange} 
          />
        </Col>
        <Col md={5}>
          <Form.Control 
            type="text" 
            placeholder="Where?" 
            value={location} 
            onChange={handleLocationChange} 
          />
        </Col>
        <Col md={2}>
          <Button variant="primary" onClick={handleSearch}>Let's Go</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;