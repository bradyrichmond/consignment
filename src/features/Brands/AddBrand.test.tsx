import '../../mockJsdom';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import AddBrand from './AddBrand';

test('add brand modal closes after successful add', async () => {
    const close = jest.fn();
    render(<AddBrand close={close} />);
    const brandNameTextfield = screen.getByTestId(/addBrandName/i);

    fireEvent.click(brandNameTextfield);
    fireEvent.change(brandNameTextfield, { target: { value: 'Old Navy' } });
    fireEvent.click(screen.getByText(/Add Brand/i));
    await waitFor(() => expect(close).toBeCalled());
})
