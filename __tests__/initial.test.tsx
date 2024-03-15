import { render } from '@testing-library/react-native';

import { Screen } from '../components/base/screen';

it('should pass', () => {
  expect(1).toBe(1);
});

it('should fail', () => {
  expect(1).toBe(2);
});

it('should pass with component', () => {
  const { getByTestId } = render(<Screen testID='screen' />);
  expect(getByTestId('screen')).toBeTruthy();
});
