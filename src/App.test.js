import React from "react";
import { render, fireEvent, findByTestId, getByTestId, findByText } from "@testing-library/react";
import ContactForm from "./components/ContactForm";

test("renders correctly", () => {
  render(<ContactForm />);
});


test ("renders App without crashing", () => {
  const { getByLabelText, getByText, getByTestId, getByRole } = render(<ContactForm />);

  // Query for the form inputs
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const emailInput = getByLabelText(/email/i);
  const messageInput = getByLabelText(/message/i);
  

  //fireEvent function from RTL to fill in the inputs
  fireEvent.change(firstNameInput, { target: {name: 'firstName', value: 'bill'}});
  
  fireEvent.change(lastNameInput, { target: {name: 'lastName', value: 'luo'}});
  
  fireEvent.change(emailInput, { target: {name: 'email', value: 'bluebill1049@hotmail.com'}});
  
  fireEvent.change(messageInput, { target: {name: 'message', value: 'this is bills name and email'}});

// query for submit button and clicking the button
  findByTestId('submit').then((response) => {
    fireEvent.click(response);
    console.log(response);
  })

  // assertion
  findByText(/bill/i);
});

