import { render, userEvent, waitFor } from '@testing-library/react-native';

import { Setting } from '../../../components/settings/setting';

const user = userEvent.setup();
jest.useFakeTimers();

it('should be closed by default', async () => {
  const { queryByTestId } = render(
    <Setting
      label='Test setting'
      availableValues={[
        {
          label: 'Test label',
          value: 'test',
        },
      ]}
      currentValue='test'
      onChange={() => {}}
    />
  );
  expect(queryByTestId('setting')).toBeTruthy();
  expect(queryByTestId('setting-option-test')).toBeFalsy();
  expect(queryByTestId('setting-current-label')).toBeTruthy();
  await waitFor(() => expect(queryByTestId('setting-open-icon')).toBeTruthy());
});

it('should have current label displayed', () => {
  const { getByText } = render(
    <Setting
      label='Test setting'
      availableValues={[
        {
          label: 'Test label',
          value: 'test',
        },
      ]}
      currentValue='test'
      onChange={() => {}}
    />
  );
  expect(getByText('Test label')).toBeTruthy();
});

it('should open and close', async () => {
  const { getByTestId, queryByTestId } = render(
    <Setting
      label='Test setting'
      availableValues={[
        {
          label: 'Test label',
          value: 'test',
        },
      ]}
      currentValue='test'
      onChange={() => {}}
    />
  );
  await user.press(getByTestId('setting-header'));
  expect(queryByTestId('setting-option-test')).toBeTruthy();
  await user.press(getByTestId('setting-header'));
  await waitFor(() => expect(queryByTestId('setting-option-test')).toBeFalsy());
});

it('should call onChange when selecting a value', async () => {
  const onChange = jest.fn();
  const { getByTestId } = render(
    <Setting
      label='Test setting'
      availableValues={[
        {
          label: 'Test label',
          value: 'test',
        },
      ]}
      currentValue='test'
      onChange={onChange}
    />
  );
  await user.press(getByTestId('setting-header'));
  await user.press(getByTestId('setting-option-test'));
  expect(onChange).toHaveBeenCalledWith('test');
});

it('should display icon next to selected value', async () => {
  const { queryByTestId } = render(
    <Setting
      label='Test setting'
      availableValues={[
        {
          label: 'Test label',
          value: 'test',
        },
        {
          label: 'Test label 2',
          value: 'test2',
        },
      ]}
      currentValue='test'
      onChange={() => {}}
      icon='arrow-right'
    />
  );
  await user.press(queryByTestId('setting-header'));
  expect(queryByTestId('setting-option-test-selected')).toBeTruthy();
  expect(queryByTestId('setting-option-test2-selected')).toBeFalsy();
});

it('should display every option', async () => {
  const options = [
    {
      label: 'Test label',
      value: 'test',
    },
    {
      label: 'Test label 2',
      value: 'test2',
    },
  ];

  const { queryByTestId } = render(
    <Setting label='Test setting' availableValues={options} currentValue='test' onChange={() => {}} />
  );

  await user.press(queryByTestId('setting-header'));
  options.forEach((option) => {
    expect(queryByTestId(`setting-option-${option.value}`)).toBeTruthy();
  });
});
