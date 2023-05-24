/*
 ** Greet component should render text hello and if name is passed
 ** It should render text hello followed by name
 */

import { render, screen } from '@testing-library/react';
import { Greet } from './Greet';

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/);
    expect(textElement).toBeInTheDocument();
  });
});
