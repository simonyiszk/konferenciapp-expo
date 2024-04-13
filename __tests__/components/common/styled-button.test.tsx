import { render, waitFor } from '@testing-library/react-native';

import { StyledButton } from '../../../components/common/styled-button';

beforeEach(() => {
  jest.clearAllMocks();
});

it('should have children if provided', () => {
  const { queryByText } = render(<StyledButton>Click me</StyledButton>);
  expect(queryByText('Click me')).toBeTruthy();
});

it('should have left icon if provided', async () => {
  const { queryByTestId } = render(<StyledButton leftIcon='arrow-left' />);
  await waitFor(() => expect(queryByTestId('left-icon')).toBeTruthy());
});

it("should not have left icon if it's not provided", () => {
  const { queryByTestId } = render(<StyledButton />);
  expect(queryByTestId('left-icon')).toBeFalsy();
});

it('should have right icon if provided', async () => {
  const { queryByTestId } = render(<StyledButton rightIcon='arrow-right' />);
  await waitFor(() => expect(queryByTestId('right-icon')).toBeTruthy());
});

it("should not have right icon if it's not provided", () => {
  const { queryByTestId } = render(<StyledButton />);
  expect(queryByTestId('right-icon')).toBeFalsy();
});
