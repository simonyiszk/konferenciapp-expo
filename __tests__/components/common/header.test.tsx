import { render } from '@testing-library/react-native';
import * as router from 'expo-router';
import { View } from 'react-native';

import { Header } from '../../../components/common/header';
import { Title } from '../../../components/common/title';

jest.mock('expo-router', () => ({
  useNavigation: jest.fn().mockReturnValue({
    canGoBack: jest.fn().mockReturnValue(true),
    goBack: jest.fn(),
  }),
}));

beforeEach(() => {
  jest.clearAllMocks();
});

it('should render the header with a back button', () => {
  const { queryByTestId } = render(
    <Header>
      <Title testID='title'>Test Title</Title>
    </Header>
  );
  expect(queryByTestId('header-container')).toBeTruthy();
  expect(queryByTestId('title')).toBeTruthy();
  expect(queryByTestId('back-button')).toBeTruthy();
});

it("should not render the back button if it can't go back", () => {
  jest.spyOn(router, 'useNavigation').mockReturnValue({
    canGoBack: jest.fn().mockReturnValue(false),
  });

  const { queryByTestId } = render(<Header />);
  expect(queryByTestId('header-container')).toBeTruthy();
  expect(queryByTestId('back-button')).toBeFalsy();
});

it('should render the header with a corner', () => {
  const { queryByTestId } = render(<Header corner={<View testID='corner' />} />);
  expect(queryByTestId('corner')).toBeTruthy();
});
