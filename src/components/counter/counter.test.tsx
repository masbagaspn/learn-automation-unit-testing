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

    const amountElement = screen.getByRole('spinbutton');
    expect(amountElement).toBeInTheDocument();

    const setButtonElement = screen.getByRole('button', { name: 'Set' });
    expect(setButtonElement).toBeInTheDocument();
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

  test('renders a count of 10 after clicking a set button', async () => {
    user.setup();

    render(<Counter />);

    const amountInputElement = screen.getByRole('spinbutton');
    await user.type(amountInputElement, '10');
    expect(amountInputElement).toHaveValue(10);

    const setButtonElement = screen.getByRole('button', { name: 'Set' });
    await user.click(setButtonElement);

    const counterElement = screen.getByRole('heading', { level: 1 });
    expect(counterElement).toHaveTextContent('10');
  });

  test('elements are focused in the right order', async () => {
    user.setup();

    render(<Counter />);

    const amountInputElement = screen.getByRole('spinbutton');
    const setButtonElement = screen.getByRole('button', { name: 'Set' });
    const incrementButton = screen.getByRole('button', { name: 'Increment' });
    const decrementButton = screen.getByRole('button', { name: 'Decrement' });

    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab();
    expect(decrementButton).toHaveFocus();
    await user.tab();
    expect(amountInputElement).toHaveFocus();
    await user.tab();
    expect(setButtonElement).toHaveFocus();
  });
});
