import '../../mockJsdom';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import AddAttributeTypeValues from './AddAttributeTypeValues';

test('add attribute modal closes after successful add', async () => {
    const close = jest.fn();
    render(<AddAttributeTypeValues attributeType='1' close={close} />);
    const attributeTypeNameTextfield = screen.getByTestId(/attributeTypeValue/i);

    fireEvent.click(attributeTypeNameTextfield);
    fireEvent.change(attributeTypeNameTextfield, { target: { value: '3m' } });
    fireEvent.click(screen.getByText(/Add Attribute Type Value/i));
    await waitFor(() => expect(close).toBeCalled());
})
