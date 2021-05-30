import { render, screen } from '@testing-library/react';
import SurfiandoApp from './SurfiandoApp';

test('renders learn react link', () => {
  render(<SurfiandoApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
