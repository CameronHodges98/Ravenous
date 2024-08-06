import React, { useState } from 'react';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import { Container } from 'react-bootstrap';

// Mock businesses for testing
const mockBusinesses = [
  {
    imageSrc: 'https://via.placeholder.com/150',
    name: 'The Coffee Place',
    address: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zipcode: '12345',
    category: 'Cafe',
    rating: 4.5,
    reviewCount: 90
  },
  {
    imageSrc: 'https://via.placeholder.com/150',
    name: 'The Burger Joint',
    address: '456 Elm St',
    city: 'Othertown',
    state: 'TX',
    zipcode: '67890',
    category: 'Restaurant',
    rating: 4.0,
    reviewCount: 120
  },
  // Add more mock businesses as needed
];

function App() {
  const [businesses, setBusinesses] = useState(mockBusinesses);

  const searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    // This is where you'll integrate the Yelp API and update the state
  };

  return (
    <Container className="App">
      <header className="App-header">
        <h1>Ravenous</h1>
      </header>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList businesses={businesses} />
    </Container>
  );
}

export default App;
