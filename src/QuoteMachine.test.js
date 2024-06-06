import { render, screen } from '@testing-library/react';
import QuoteMachine from './QuoteMachine';

test('renders learn react link', () => {
  render(<QuoteMachine />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
