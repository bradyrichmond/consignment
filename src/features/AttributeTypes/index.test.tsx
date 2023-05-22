import '../../mockJsdom';
import { render, screen } from '../../test-utils';
import AttributeTypes from '.';
import userEvent from '@testing-library/user-event';

test('shows add attribute modal', async () => {
    render(<AttributeTypes />);
    userEvent.click(screen.getByText('Add an Attribute Type'));
    expect(screen.getByText('Add Attribute Type'));
    userEvent.click(screen.getByLabelText('close'));
    expect(screen.queryByText('Add Attribute Type')).not.toBeInTheDocument();
})