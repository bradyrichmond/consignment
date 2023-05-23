import '../../mockJsdom';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import SetPrice from './SetPrice';

test('override price modal opens', async () => {
    const setItemPrice = jest.fn();
    await waitFor(() => render(<SetPrice setItemPrice={setItemPrice}/>));
    fireEvent.click(screen.getByText(/Override Pricing/i));
    await waitFor(() => expect(screen.getByText(/Add Price/i)).toBeInTheDocument());
})
