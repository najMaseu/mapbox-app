import { render, userEvent, screen } from 'tests/utils';
import { Button } from './Button';
import { vi } from 'vitest';

describe('Button component', () => {
  it('calls function passed to onClick', () => {
    const mockOnClick = vi.fn();
    render(<Button onClick={mockOnClick} label='test' />);

    const btn = screen.getByRole('button');

    userEvent.click(btn);

    expect(mockOnClick).toHaveBeenCalledOnce();
  });

  describe('Button disabled', () => {
    it('should be disabled', () => {
      render(<Button label='test' disabled />);

      const btn = screen.getByRole('button');

      expect(btn).toBeDisabled();
    });

    it('does not call function passed to onClick', () => {
      const mockOnClick = vi.fn();
      render(<Button onClick={mockOnClick} label='test' disabled />);

      const btn = screen.getByRole('button');

      userEvent.click(btn);

      expect(mockOnClick).not.toHaveBeenCalled();
    });
  });
});
