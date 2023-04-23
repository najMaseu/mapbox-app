import { DoubleStack } from './DoubleStack';
import { userEvent, render, screen } from 'tests/utils';

describe('DoubleStack', () => {
  it('displays both card titles', () => {
    const mainContent = 'testmainContent';
    const secondaryConent = 'testsecondaryConent';
    const mainCardTitle = 'testmainCardTitle';
    const secondaryCardTitle = 'testsecondaryCardTitle';

    render(
      <DoubleStack
        mainContent={mainContent}
        secondaryConent={secondaryConent}
        mainCardTitle={mainCardTitle}
        secondaryCardTitle={secondaryCardTitle}
      />,
    );

    expect(screen.getByLabelText(mainCardTitle)).toBeVisible();
    expect(screen.getByLabelText(secondaryCardTitle)).toBeVisible();
  });

  it('displays main content', () => {
    const mainContent = 'testmainContent';
    const secondaryConent = 'testsecondaryConent';
    const mainCardTitle = 'testmainCardTitle';
    const secondaryCardTitle = 'testsecondaryCardTitle';

    render(
      <DoubleStack
        mainContent={mainContent}
        secondaryConent={secondaryConent}
        mainCardTitle={mainCardTitle}
        secondaryCardTitle={secondaryCardTitle}
      />,
    );

    expect(screen.getByText(mainContent)).toBeVisible();
    expect(screen.getByText(secondaryConent)).not.toBeVisible();
  });

  it('displays secondary content when clicked on secondary card', () => {
    const mainContent = 'testmainContent';
    const secondaryConent = 'testsecondaryConent';
    const mainCardTitle = 'testmainCardTitle';
    const secondaryCardTitle = 'testsecondaryCardTitle';

    render(
      <DoubleStack
        mainContent={mainContent}
        secondaryConent={secondaryConent}
        mainCardTitle={mainCardTitle}
        secondaryCardTitle={secondaryCardTitle}
      />,
    );

    const secondaryCardSwitch = screen.getByRole('button');

    userEvent.click(secondaryCardSwitch);

    expect(screen.getByText(mainContent)).not.toBeVisible();
    expect(screen.getByText(secondaryConent)).toBeVisible();
  });

  it('can return to displaying main content when secondary was clicked', () => {
    const mainContent = 'testmainContent';
    const secondaryConent = 'testsecondaryConent';
    const mainCardTitle = 'testmainCardTitle';
    const secondaryCardTitle = 'testsecondaryCardTitle';

    render(
      <DoubleStack
        mainContent={mainContent}
        secondaryConent={secondaryConent}
        mainCardTitle={mainCardTitle}
        secondaryCardTitle={secondaryCardTitle}
      />,
    );

    userEvent.click(screen.getByLabelText(secondaryCardTitle));
    userEvent.click(screen.getByLabelText(mainCardTitle));

    expect(screen.getByText(mainContent)).toBeVisible();
    expect(screen.getByText(secondaryConent)).not.toBeVisible();
  });
});
