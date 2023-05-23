import '../../mockJsdom';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import AddClient from './AddClient';

test('add brand modal closes after successful add', async () => {
    const close = jest.fn();
    render(<AddClient close={close} />);
    const firstNameTextfield = screen.getByTestId(/newClientFirstName/i);
    const lastNameTextfield = screen.getByTestId(/newClientLastName/i);
    const companyNameTextField = screen.getByTestId(/newClientCompanyName/i);
    const phoneNumberextfield = screen.getByTestId(/newClientPhoneNumber/i);
    const emailTextfield = screen.getByTestId(/newClientEmail/i);
    const address1Textfield = screen.getByTestId(/newClientAddress1/i);
    const address2Textfield = screen.getByTestId(/newClientAddress2/i);
    const address3Textfield = screen.getByTestId(/newClientAddress3/i);
    const cityTextfield = screen.getByTestId(/newClientCity/i);
    const stateTextfield = screen.getByTestId(/newClientState/i);
    const zipCodeTextfield = screen.getByTestId(/newClientZipCode/i);

    fireEvent.click(firstNameTextfield);
    fireEvent.change(firstNameTextfield, { target: { value: 'Dixie' } });
    fireEvent.click(lastNameTextfield);
    fireEvent.change(lastNameTextfield, { target: { value: 'Bair' } });
    fireEvent.click(companyNameTextField);
    fireEvent.change(companyNameTextField, { target: { value: 'Consignment' } });
    fireEvent.click(phoneNumberextfield);
    fireEvent.change(phoneNumberextfield, { target: { value: '555-555-5555' } });
    fireEvent.click(emailTextfield);
    fireEvent.change(emailTextfield, { target: { value: 'Dixie@consignment.com' } });
    fireEvent.click(address1Textfield);
    fireEvent.change(address1Textfield, { target: { value: '123 Consignment Dr' } });
    fireEvent.click(address2Textfield);
    fireEvent.change(address2Textfield, { target: { value: '' } });
    fireEvent.click(address3Textfield);
    fireEvent.change(address3Textfield, { target: { value: '' } });
    fireEvent.click(cityTextfield);
    fireEvent.change(cityTextfield, { target: { value: 'Seattle' } });
    fireEvent.click(stateTextfield);
    fireEvent.change(stateTextfield, { target: { value: 'WA' } });
    fireEvent.click(zipCodeTextfield);
    fireEvent.change(zipCodeTextfield, { target: { value: '99999' } });

    fireEvent.click(screen.getByText(/Add Client/i));
    await waitFor(() => expect(close).toBeCalled());
})
