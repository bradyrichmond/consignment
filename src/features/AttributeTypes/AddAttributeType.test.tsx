import '../../mockJsdom';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import AddAttributeType from './AddAttributeType';

test('add attribute modal closes after successful add', async () => {
    const close = jest.fn();
    render(<AddAttributeType  close={close} />);
    const attributeTypeNameTextfield = screen.getByTestId(/attributeTypeDescription/i);

    fireEvent.click(attributeTypeNameTextfield);
    fireEvent.change(attributeTypeNameTextfield, { target: { value: 'Size' } });
    fireEvent.click(screen.getByText(/Add Attribute Type/i));
    await waitFor(() => expect(close).toBeCalled());
})
