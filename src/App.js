import './App.css';

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

function Business() {
  return (
    <div id="business">
      <img src={business.src} alt={business.name} />
      <h2>{business.name}</h2>
      <p>{business.address}</p>
      <p>{business.city}</p>
      <p>{business.state}, {business.zipCode}</p>
      <h3>{business.category}</h3>
      <p>{business.rating}</p>
      <p>{business.reviewCount}</p>
    </div>
  );
}

export default Business;