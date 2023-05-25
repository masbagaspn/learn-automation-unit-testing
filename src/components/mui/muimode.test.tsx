import { render, screen } from '@testing-library/react';
import { MuiMode } from './MuiMode';
import { AppProviders } from '../../providers/AppProviders';

describe('MuiMode', () => {
  test('render text correctly', () => {
    render(<MuiMode />, {
      wrapper: AppProviders,
    });

    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent('dark mode');
  });
});
