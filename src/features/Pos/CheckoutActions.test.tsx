import '../../mockJsdom';
import { Item } from '../../models';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import CheckoutActions from './CheckoutActions';

const items = [new Item({ userId: '1', statusId: '1', itemName: 'Test Item', price: '2.99' })]

test('add coupon modal opens', async () => {
    const addItem = jest.fn();
    await waitFor(() => render(<CheckoutActions items={items} addItem={addItem} />));
    fireEvent.click(screen.getByRole('button', { name:/Coupon/i }));
    await waitFor(() => expect(screen.getByText(/New Coupon/i)).toBeInTheDocument());
})

test('add cash modal opens', async () => {
    const addItem = jest.fn();
    await waitFor(() => render(<CheckoutActions items={items} addItem={addItem} />));
    fireEvent.click(screen.getByRole('button', { name:/Cash/i }));
    await waitFor(() => expect(screen.getByRole('button', { name: /Add Manual Amount/i })).toBeInTheDocument());
})

test('add credit card modal opens', async () => {
    const addItem = jest.fn();
    await waitFor(() => render(<CheckoutActions items={items} addItem={addItem} />));
    fireEvent.click(screen.getByRole('button', { name:/Credit \/ Debit/i }));
    await waitFor(() => expect(screen.getByText(/Initializing.../i)).toBeInTheDocument());
})


test('add gift card modal opens', async () => {
    const addItem = jest.fn();
    await waitFor(() => render(<CheckoutActions items={items} addItem={addItem} />));
    fireEvent.click(screen.getByRole('button', { name:/Gift Card/i }));
    await waitFor(() => expect(screen.getByText(/Scan Gift Card/i)).toBeInTheDocument());
})

test('add consigner modal opens', async () => {
    const addItem = jest.fn();
    await waitFor(() => render(<CheckoutActions items={items} addItem={addItem} />));
    fireEvent.click(screen.getByRole('button', { name:/Select a Consigner/i }));
    await waitFor(() => expect(screen.getByText(/Select Consigner/i)).toBeInTheDocument());
})