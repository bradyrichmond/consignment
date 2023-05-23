import '../../mockJsdom';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import Categories from './';

test('add category modal opens', async () => {
    render(<Categories />);
    fireEvent.click(screen.getByText(/Add a Category/i));
    await waitFor(() =>  expect(screen.getByText(/Add Category/i)).toBeInTheDocument());
})
