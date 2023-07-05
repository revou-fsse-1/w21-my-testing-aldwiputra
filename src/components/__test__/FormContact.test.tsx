import { fireEvent, render } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import FormContact from '../FormContact';

test('render correctly', () => {
  const mockFunc = vi.fn();

  const { getByText, getByLabelText } = render(
    <FormContact
      handleSubmit={mockFunc}
      onSubmit={mockFunc}
      errors={{}}
      register={mockFunc}
      isSubmitting={false}
      type={'create'}
    />
  );

  expect(getByText('Submit')).toBeDefined();

  // fireEvent.change(getByLabelText(/firstname/i), {
  //   target: { value: 'Aldi' },
  // });
  // fireEvent.click(getByText(/submit/i));
  // expect(mockFunc).toHaveBeenCalledWith('Aldi');
});
