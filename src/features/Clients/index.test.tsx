import '../../mockJsdom';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import Clients from './';

test('add client modal opens', async () => {
    await waitFor(() => render(<Clients />));
    fireEvent.click(screen.getByText(/Add a Client/i));
    await waitFor(() => expect(screen.getByText(/Add Client/i)).toBeInTheDocument());
})
