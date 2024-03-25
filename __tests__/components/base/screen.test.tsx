import { render } from '@testing-library/react-native';

import { Screen } from '../../../components/base/screen';
import { AnalyticsService } from '../../../services/analytics.service';

jest.mock('../../../services/analytics.service', () => ({
  AnalyticsService: {
    sendPageView: jest.fn(),
  },
}));

beforeEach(() => {
  jest.clearAllMocks();
});

it('should render screen', () => {
  const { getByTestId } = render(<Screen testID='testId' />);
  expect(getByTestId('testId')).toBeTruthy();
});

it('should send analytics event if provided', () => {
  const { getByTestId } = render(<Screen testID='testId' analyticsScreenName='testLocation' />);
  expect(getByTestId('testId')).toBeTruthy();
  expect(AnalyticsService.sendPageView).toHaveBeenCalledWith('testLocation');
});

it('should not send analytics event if not provided', () => {
  render(<Screen testID='testId' />);
  expect(AnalyticsService.sendPageView).not.toHaveBeenCalled();
});
