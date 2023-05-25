import { render, screen } from '../../test-utils';
import { MuiMode } from './MuiMode';

describe('MuiMode', () => {
  test('render text correctly', () => {
    render(<MuiMode />);

    const headingElement = screen.getByRole('heading', { level: 1 });
    expect(headingElement).toHaveTextContent('dark mode');
  });
});
