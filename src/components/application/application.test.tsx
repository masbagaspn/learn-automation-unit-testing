import { render, screen } from '@testing-library/react';
import { Application } from './Application';

describe('Application', () => {
  test('render correctly', () => {
    render(<Application />);

    /* 
        Learning RTL Queries

        Pririoty Order:
        1. getByRole
        2. getByLabelText 
        3. getByPlaceholderText
        4. getByText
        5. getByDisplayValue
        6. getByAltText
        7. getByTitle
        8. getByTestId
    */

    // queries: getByRole, option: level
    const pageHeading = screen.getByRole('heading', { level: 1 });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole('heading', { level: 2 });
    expect(sectionHeading).toBeInTheDocument();

    // queries: getByText
    const paragraphElement = screen.getByText('All fields are mandatory');
    expect(paragraphElement).toBeInTheDocument();

    // queries: getByText, option: textMatch -> string
    const secondParagraphElement = screen.getByText('All fields', {
      exact: false,
    });
    expect(secondParagraphElement).toBeInTheDocument();

    // queries: getByText, option: textMatch -> regEx
    const thirdParagraphElement = screen.getByText(/mandatory/);
    expect(thirdParagraphElement).toBeInTheDocument();

    // queries: getByText, option: textMatch -> function
    const forthParagraphElement = screen.getByText((content) =>
      content.startsWith('All')
    );
    expect(forthParagraphElement).toBeInTheDocument();

    // queries: getByTitle
    const closeElement = screen.getByTitle('close');
    expect(closeElement).toBeInTheDocument();

    // queries: getByAltText
    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

    // queries: getByTestId
    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();

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
