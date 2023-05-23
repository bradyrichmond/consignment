import '../../mockJsdom';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import AddCoupon from './AddCoupon';

test('add brand modal closes after successful add', async () => {
    const close = jest.fn();
    render(<AddCoupon close={close} />);
    const couponNameTextfield = screen.getByTestId(/addCouponName/i);
    const couponAmountTextfield = screen.getByTestId(/addCouponAmount/i);

    fireEvent.click(couponNameTextfield);
    fireEvent.change(couponNameTextfield, { target: { value: 'Test' } });
    fireEvent.click(couponAmountTextfield);
    fireEvent.change(couponAmountTextfield, { target: { value: '20' } });

    fireEvent.click(screen.getByText(/Add Coupon/i));
    await waitFor(() => expect(close).toBeCalled());
})
