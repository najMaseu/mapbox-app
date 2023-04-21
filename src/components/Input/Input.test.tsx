import { render, screen, userEvent } from 'tests/utils';
import Input from './Input';
import { vi } from 'vitest';

describe('Input component', () => {
  it('can be typed in', () => {
    const typedVal = 'test';

    render(<Input />);

    const input = screen.getByRole('textbox');

    userEvent.type(input, typedVal);

    expect(input).toHaveValue(typedVal);
  });

  it('calls onChange when passed', () => {
    const typedVal = 'test';
    const mockOnChange = vi.fn();

    render(<Input onChange={mockOnChange} />);

    const input = screen.getByRole('textbox');

    userEvent.type(input, typedVal);

    expect(mockOnChange).toHaveBeenCalledTimes(typedVal.length);
  });

  describe('Input disabled', () => {
    it('should be disabled', () => {
      render(<Input disabled />);

      const input = screen.getByRole('textbox');

      expect(input).toBeDisabled();
    });

    it('can not be typed in', () => {
      const typedVal = 'test';

      render(<Input disabled />);

      const input = screen.getByRole('textbox');

      userEvent.type(input, typedVal);

      expect(input).not.toHaveValue(typedVal);
    });

    it('does not call onChange when passed', () => {
      const typedVal = 'test';
      const mockOnChange = vi.fn();

      render(<Input onChange={mockOnChange} disabled />);

      const input = screen.getByRole('textbox');

      userEvent.type(input, typedVal);

      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });
});
