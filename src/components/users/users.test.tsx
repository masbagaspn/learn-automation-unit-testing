import { render, screen } from '@testing-library/react';
import { Users } from './Users';

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />);

    const headingElement = screen.getByRole('heading', {
      level: 1,
      name: 'Users',
    });
    expect(headingElement).toBeInTheDocument();
  });

  test('renders a list of users', async () => {
    render(<Users />);

    const users = await screen.findAllByRole('listitem');
    expect(users).toHaveLength(4);
  });
});
