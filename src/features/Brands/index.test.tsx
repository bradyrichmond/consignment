import '../../mockJsdom';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import Brands from './';

test('add brand modal opens', async () => {
    await waitFor(() => render(<Brands />));
    fireEvent.click(screen.getByText(/Add a Brand/i));
    expect(screen.getByText(/Add Brand/i)).toBeInTheDocument();
})
