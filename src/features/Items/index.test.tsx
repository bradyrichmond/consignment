import '../../mockJsdom';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import Items from './';

test('items renders', async () => {
    await waitFor(() => render(<Items />));
    await waitFor(() => expect(screen.getByText(/Missing tags only/i)).toBeInTheDocument());
})