import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Counter } from './Counter';

describe('Counter', () => {
  test('renders correcly', () => {
    render(<Counter />);

    const counterElement = screen.getByRole('heading', { level: 1, name: '0' });
    expect(counterElement).toBeInTheDocument();

    const incrementButtonElement = screen.getByRole('button', {
      name: 'Increment',
    });
    expect(incrementButtonElement).toBeInTheDocument();

    const decrementButtonElement = screen.getByRole('button', {
      name: 'Decrement',
    });
    expect(decrementButtonElement).toBeInTheDocument();
  });

  test('renders a count of 0', () => {
    render(<Counter />);

    const counterElement = screen.getByRole('heading', { level: 1 });
    expect(counterElement).toHaveTextContent('0');
  });

  test('renders a count of 1 after clicking the increment button', async () => {
    render(<Counter />);
    user.setup();
    const counterElement = screen.getByRole('heading', { level: 1 });
    expect(counterElement).toHaveTextContent('0');

    const incrementButtonElement = screen.getByRole('button', {
      name: 'Increment',
    });
    expect(incrementButtonElement).toBeInTheDocument();

    await user.click(incrementButtonElement);

    expect(counterElement).toHaveTextContent('1');
  });

  test('renders a count of 2 after clicking the decrement button', async () => {
    render(<Counter />);
    user.setup();
    const counterElement = screen.getByRole('heading', { level: 1 });
    expect(counterElement).toHaveTextContent('0');

    const incrementButtonElement = screen.getByRole('button', {
      name: 'Increment',
    });
    expect(incrementButtonElement).toBeInTheDocument();

    await user.dblClick(incrementButtonElement);

    expect(counterElement).toHaveTextContent('2');
  });

  test('renders a count of -1 after clicking the decrement button', async () => {
    render(<Counter />);
    user.setup();
    const counterElement = screen.getByRole('heading', { level: 1 });
    expect(counterElement).toHaveTextContent('0');

    const decrementButtonElement = screen.getByRole('button', {
      name: 'Decrement',
    });
    expect(decrementButtonElement).toBeInTheDocument();

    await user.click(decrementButtonElement);

    expect(counterElement).toHaveTextContent('-1');
  });

  test('renders a count of -1 after clicking the decrement button', async () => {
    render(<Counter />);
    user.setup();
    const counterElement = screen.getByRole('heading', { level: 1 });
    expect(counterElement).toHaveTextContent('0');

    const decrementButtonElement = screen.getByRole('button', {
      name: 'Decrement',
    });
    expect(decrementButtonElement).toBeInTheDocument();

    await user.dblClick(decrementButtonElement);

    expect(counterElement).toHaveTextContent('-2');
  });
});
