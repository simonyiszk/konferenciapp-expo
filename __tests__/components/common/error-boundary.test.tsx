import { render, userEvent } from '@testing-library/react-native';

import { ErrorBoundary } from '../../../components/common/error-boundary';

const user = userEvent.setup();
jest.useFakeTimers();

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({ top: 0, bottom: 0, left: 0, right: 0 }),
}));

jest.mock('posthog-react-native', () => ({
  usePostHog: () => ({
    screen: jest.fn(),
  }),
}));

it('should render error message', () => {
  const { queryByTestId, getByText } = render(
    <ErrorBoundary error={{ name: 'Error name', message: 'Error message' }} retry={jest.fn()} />
  );
  expect(queryByTestId('error-message')).toBeTruthy();
  expect(getByText('Error message')).toBeTruthy();
});

it('should call retry function', async () => {
  const retry = jest.fn();
  const { getByTestId } = render(
    <ErrorBoundary error={{ name: 'Error name', message: 'Error message' }} retry={retry} />
  );
  await user.press(getByTestId('error-retry'));
  expect(retry).toHaveBeenCalled();
});
