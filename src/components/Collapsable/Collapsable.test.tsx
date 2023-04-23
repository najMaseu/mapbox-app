import { render, userEvent, screen } from 'tests/utils';
import { Collapsable } from './Collapsable';

describe('Collapsable component', () => {
  it('calls function passed to onClick', () => {
    const testHeader = 'testHeader';

    render(
      <Collapsable header={testHeader}>
        <div data-testid={'testDiv'}>testcontent</div>
      </Collapsable>,
    );

    const btn = screen.getByRole('button');

    userEvent.click(btn);

    expect(screen.getByText('testcontent')).toBeVisible();
    expect(screen.getByText(testHeader)).toBeInTheDocument();
  });
});
