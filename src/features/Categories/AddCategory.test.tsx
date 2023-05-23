import '../../mockJsdom';
import { fireEvent, render, screen, waitFor } from '../../test-utils';
import AddCategory from './AddCategory';

test('add category modal closes after successful add', async () => {
    const close = jest.fn();
    render(<AddCategory close={close} />);
    const categoryNameTextfield = screen.getByTestId(/addCategoryName/i);

    fireEvent.click(categoryNameTextfield);
    fireEvent.change(categoryNameTextfield, { target: { value: 'Shirts' } });
    fireEvent.click(screen.getByText(/Add Category/i));
    await waitFor(() => {expect(close).toBeCalled()});
})
