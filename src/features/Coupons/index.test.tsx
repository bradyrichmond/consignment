import '../../mockJsdom';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import Coupon from './';

test('add coupon modal opens', async () => {
    await waitFor(() => render(<Coupon />));
    fireEvent.click(screen.getByText(/Add a Coupon/i));
    await waitFor(() => expect(screen.getByText(/Add Coupon/i)).toBeInTheDocument());
})
