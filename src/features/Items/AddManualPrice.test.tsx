import '../../mockJsdom';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import AddManualPrice from './AddManualPrice';

test('add brand modal closes after successful add', async () => {
    const close = jest.fn();
    const selectPrice = jest.fn();
    render(<AddManualPrice close={close} selectPrice={selectPrice} />);
    const addPriceTextfield = screen.getByTestId(/addPrice/i);

    fireEvent.click(addPriceTextfield);
    fireEvent.change(addPriceTextfield, { target: { value: '2.99' } });

    fireEvent.click(screen.getByText(/Add Price/i));
    await waitFor(() => expect(selectPrice).toBeCalled())
    await waitFor(() => expect(close).toBeCalled());
})
