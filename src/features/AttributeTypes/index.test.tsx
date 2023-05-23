import '../../mockJsdom';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import AttributeTypes from '.';

test('can open and close add attributes modal', async () => {
    await waitFor(() =>  render(<AttributeTypes />));
    fireEvent.click(screen.getByText('Add an Attribute Type'));
    expect(screen.getByText('Add Attribute Type')).toBeInTheDocument();
    fireEvent.click(screen.getByLabelText('close'));
    expect(screen.queryByText('Add Attribute Type')).not.toBeInTheDocument();
})