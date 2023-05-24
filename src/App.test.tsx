import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { App, WrappedApp } from './App';

describe('App', () => {
  it('renders hello world', () => {
    // ARRANGE - get our unit test set up
    render(<WrappedApp />);
    // ACT - do the things what user would do with specific unit
    // EXPECT - expected outcome
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });

  it('renders not found if invalid path', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/banana']}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Not Found');

    expect(screen.getByText(/back to home/i)).toBeInTheDocument();

    await user.click(screen.getByRole('link'));

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
});
