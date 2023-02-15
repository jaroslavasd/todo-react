import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';

test('renders "TODO Awesome React App"', () => {
  render(<App />);

  const appHeader = 'TODO 1 React App';
  expect(screen.getByText(appHeader).textContent).toContain(appHeader);
  expect(screen.getByText(appHeader)).toHaveTextContent(appHeader);
});
