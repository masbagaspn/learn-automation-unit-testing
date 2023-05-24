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

    // queries: getByText
    const paragraphElement = screen.getByText('All fields are mandatory');
    expect(paragraphElement).toBeInTheDocument();

    // queries: getByAltText
    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

    // queries: getByRole, options: name
    const nameElement = screen.getByRole('textbox', { name: 'Name' });
    expect(nameElement).toBeInTheDocument();

    // queries: getByLabelTest, options: selector
    const secondNameElement = screen.getByLabelText('Name', {
      selector: 'input',
    });
    expect(secondNameElement).toBeInTheDocument();

    // queries: getByPlaceholderText
    const thirdNameElement = screen.getByPlaceholderText('Full Name');
    expect(thirdNameElement).toBeInTheDocument();

    // queries: getByDisplayValue
    const forthNameElement = screen.getByDisplayValue('Sagab');
    expect(forthNameElement).toBeInTheDocument();

    // queries: getByRole, options: name
    const bioElement = screen.getByRole('textbox', { name: 'Bio' });
    expect(bioElement).toBeInTheDocument();

    // queries: getByRole, options: default
    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    // queries: getByRole, options: default
    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    // queries: getByLabelText
    const secondTermsElement = screen.getByLabelText(
      'I agree to terms and conditions'
    );
    expect(secondTermsElement).toBeInTheDocument();

    // queries: getByRole, options: default
    const submitButtonElement = screen.getByRole('button');
    expect(submitButtonElement).toBeInTheDocument();
  });
});
