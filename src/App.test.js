import { render, screen } from '@testing-library/react';
import Business from './App';

test('renders learn react link', () => {
  render(<Business />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
