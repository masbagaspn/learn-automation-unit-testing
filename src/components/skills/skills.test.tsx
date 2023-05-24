import { render, screen } from '@testing-library/react';
import { Skills } from './skills';

describe('Skills', () => {
  const skills = ['HTML', 'CSS', 'JavaScript'];

  test('renders correctly', () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('renders list of skills', () => {
    render(<Skills skills={skills} />);

    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(skills.length);
  });

  test('renders login button', () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole('button', { name: 'Login' });
    expect(loginButton).toBeInTheDocument();
  });

  // query: queryByRole
  test('start learning is not rendered', () => {
    render(<Skills skills={skills} />);

    const startLearningButton = screen.queryByRole('button', {
      name: 'Start Learning',
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  // query: findBy
  test('Start learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />);

    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start Learning',
      },
      {
        timeout: 2000,
      }
    );
    expect(startLearningButton).toBeInTheDocument();
  });
});
