import { render, screen, userEvent } from 'tests/utils';
import { TextField } from './TextField';
import { vi } from 'vitest';

describe('TextField component', () => {
  it('can be typed in', () => {
    const label = 'test label';
    const typedVal = 'test';

    render(<TextField label={label} />);

    const input = screen.getByLabelText(label);

    userEvent.type(input, typedVal);

    expect(input).toHaveValue(typedVal);
  });

  it('calls onChange when passed', () => {
    const mockOnChange = vi.fn();
    const label = 'test label';
    const typedVal = 'test';

    render(<TextField label={label} onChange={mockOnChange} />);

    const input = screen.getByLabelText(label);

    userEvent.type(input, typedVal);

    expect(mockOnChange).toHaveBeenCalledTimes(typedVal.length);
  });

  it('dsplays error message and label ', () => {
    const label = 'test label';
    const errorMessage = 'test';

    render(<TextField label={label} errorMsg={errorMessage} />);

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  describe('TextField disabled', () => {
    it('should be disabled', () => {
      const label = 'test label';

      render(<TextField label={label} disabled />);

      const input = screen.getByLabelText(label);

      expect(input).toBeDisabled();
    });

    it('can not be typed in', () => {
      const label = 'test label';
      const typedVal = 'test';

      render(<TextField label={label} disabled />);

      const input = screen.getByLabelText(label);

      userEvent.type(input, typedVal);

      expect(input).not.toHaveValue(typedVal);
    });

    it('does not call onChange when passed', () => {
      const mockOnChange = vi.fn();
      const typedVal = 'test';
      const label = 'test label';

      render(<TextField label={label} disabled />);

      const input = screen.getByLabelText(label);

      userEvent.type(input, typedVal);

      expect(mockOnChange).not.toHaveBeenCalled();
    });
  });
});
