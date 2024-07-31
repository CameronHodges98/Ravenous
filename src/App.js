import React from 'react';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import { Container } from 'react-bootstrap';

function App() {
  const searchYelp = (term, location, sortBy) => {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    // Add your Yelp API integration here later
  };

  return (
    <Container className="App">
      <header className="App-header">
        <h1>Ravenous</h1>
      </header>
      <SearchBar searchYelp={searchYelp} />
      <BusinessList />
    </Container>
  );
}

export default App;