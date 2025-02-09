import { render } from '@testing-library/react-native';

import { Screen } from '../../../components/base/screen';

jest.mock('posthog-react-native', () => ({
  usePostHog: () => ({
    screen: jest.fn(),
  }),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

it('should render screen', () => {
  const { getByTestId } = render(<Screen testID='testId' />);
  expect(getByTestId('testId')).toBeTruthy();
});
