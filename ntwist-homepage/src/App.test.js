// Importing required utilities from @testing-library/react for React component testing.
import { render, screen } from '@testing-library/react';

// Importing the App component to be tested.
import App from './App';

// Defining a test suite for the App component.
test('renders learn react link', () => {
  // Rendering the App component in the virtual DOM.
  render(<App />);

  // Searching the rendered component for a text node that matches the regex /learn react/i.
  const linkElement = screen.getByText(/learn react/i);

  // Expecting that the found text node (linkElement) should be present in the document.
  expect(linkElement).toBeInTheDocument();
});
