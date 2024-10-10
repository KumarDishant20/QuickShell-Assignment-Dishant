import { render, screen } from '@testing-library/react';
import App from './App';

test('should display the "learn react" link', () => {
  render(<App />);
  const linkElement = screen.queryByText(/learn react/i);
  expect(linkElement).toBeTruthy();
});
