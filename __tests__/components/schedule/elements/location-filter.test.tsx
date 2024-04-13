import { render, userEvent } from '@testing-library/react-native';

import { LocationFilter } from '../../../../components/schedule/elements/location-filter';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

const user = userEvent.setup();
jest.useFakeTimers();

beforeEach(() => {
  jest.clearAllMocks();
});

function isOptionSelected(element: any) {
  return element.props.style.some((sp: Record<string, number | string>) => sp.backgroundColor === '#fff');
}

it('should display available options', () => {
  const { getByText } = render(
    <LocationFilter current='option1' options={['option1', 'option2']} onChange={jest.fn()} />
  );

  expect(getByText('option1')).toBeDefined();
  expect(getByText('option2')).toBeDefined();
});

it("should display 'All' option", () => {
  const { getByTestId } = render(
    <LocationFilter current={undefined} options={['option1', 'option2']} onChange={jest.fn()} />
  );

  expect(getByTestId('location-filter-option-all')).toBeDefined();
});

it('should call onChange with selected option', async () => {
  const onChange = jest.fn();
  const { getByText } = render(
    <LocationFilter current='option1' options={['option1', 'option2']} onChange={onChange} />
  );

  await user.press(getByText('option2'));

  expect(onChange).toHaveBeenCalledWith('option2');
});

it('should call onChange with undefined when selecting All', async () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <LocationFilter current='option1' options={['option1', 'option2']} onChange={onChange} />
  );

  await user.press(getByTestId('location-filter-option-all'));

  expect(onChange).toHaveBeenCalledWith(undefined);
});

it('should have all option selected when current is undefined', () => {
  const { getByTestId } = render(
    <LocationFilter current={undefined} options={['option1', 'option2']} onChange={jest.fn()} />
  );

  expect(isOptionSelected(getByTestId('location-filter-option-all'))).toBeTruthy();

  expect(isOptionSelected(getByTestId('location-filter-option-option1'))).toBeFalsy();

  expect(isOptionSelected(getByTestId('location-filter-option-option2'))).toBeFalsy();
});

it("should have selected option's background color white", () => {
  const { getByTestId } = render(
    <LocationFilter current='option1' options={['option1', 'option2']} onChange={jest.fn()} />
  );

  expect(isOptionSelected(getByTestId('location-filter-option-all'))).toBeFalsy();

  expect(isOptionSelected(getByTestId('location-filter-option-option1'))).toBeTruthy();

  expect(isOptionSelected(getByTestId('location-filter-option-option2'))).toBeFalsy();
});
