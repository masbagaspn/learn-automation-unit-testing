import { render, screen } from '@testing-library/react';
import { Application } from './application';

describe('Application', () => {
  test('render correctly', () => {
    render(<Application />);

    // queries: getByRole, option: level
    const pageHeading = screen.getByRole('heading', { level: 1 });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    // queries: getByRole, options: name
    const nameElement = screen.getByRole('textbox', { name: 'Name' });
    expect(nameElement).toBeInTheDocument();

    // queries: getByLabelTest, options: selector
    const secondNameElement = screen.getByLabelText('Name', {
      selector: 'input',
    });
    expect(secondNameElement).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', { name: 'Bio' });
    expect(bioElement).toBeInTheDocument();

    // queries: getByRole, options: default
    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const secondTermsElement = screen.getByLabelText(
      'I agree to terms and conditions'
    );
    expect(secondTermsElement).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});
